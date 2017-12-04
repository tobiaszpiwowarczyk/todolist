package pl.toby.todolist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.toby.todolist.TodoList;
import pl.toby.todolist.TodoListRepository;
import pl.toby.user.User;
import pl.toby.user.UserRepository;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class TodoListServiceImpl implements TodoListService {

    private TodoListRepository todoListRepository;
    private UserRepository userRepository;

    @Autowired
    public TodoListServiceImpl(TodoListRepository todoListRepository,UserRepository userRepository) {
        this.todoListRepository = todoListRepository;
        this.userRepository = userRepository;
    }


    // --------------------------------------------------------------------------------------------------------

    private TodoList setNext(TodoList todoList) {
        todoList.setNextTodoList(null);

        if(this.findAll().indexOf(todoList) > 0) {
            todoList.setNextTodoList(this.findAll().get(this.findAll().indexOf(todoList) - 1));
        }

        return todoList;
    }

    // --------------------------------------------------------------------------------------------------------

    private TodoList setPrev(TodoList todoList) {
        todoList.setPrevTodoList(null);

        if(this.findAll().indexOf(todoList) < this.findAll().size() - 1) {
            todoList.setPrevTodoList(this.findAll().get(this.findAll().indexOf(todoList) + 1));
        }

        return todoList;
    }

    // --------------------------------------------------------------------------------------------------------

    private List<TodoList> findAll() {
        return todoListRepository.findAll();
    }

    // --------------------------------------------------------------------------------------------------------


    @Override
    public boolean exists(TodoList todoList) {
        return todoListRepository.findAll().stream()
                    .filter(t -> t.getName().equals(todoList.getName()))
                    .collect(Collectors.toList()).size() > 0;
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public TodoList findById(UUID id) {
        return todoListRepository.findOne(id);
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public List<TodoList> addTodoList(String username, TodoList todoList) {
        User user = userRepository.findByUsername(username);

        todoList.setCreatedDate(new Date());
        todoList.setUser(user);
        todoListRepository.save(todoList);

        todoList = this.setNext(todoList);
        todoListRepository.save(todoList);

        for(TodoList t : this.findAll()) {
            t = this.setPrev(t);
            t = this.setNext(t);

            todoListRepository.save(t);
        }

        return user.getTodoLists();
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public TodoList updateTodoList(UUID todoListID, TodoList todoList) {
        TodoList todoListFound = todoListRepository.findOne(todoListID);
        todoListFound.setName(todoList.getName());

        todoListRepository.save(todoListFound);

        return todoListFound;
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public List<TodoList> removeTodoList(String username, UUID todoListID) {
        User user = userRepository.findByUsername(username);
        TodoList t = this.findById(todoListID);

        if(t.getPrevTodoList() != null) {
            TodoList tPrev = this.findById(t.getPrevTodoList().getId());
            tPrev.setNextTodoList(null);
            todoListRepository.save(tPrev);

        }
        if (t.getNextTodoList() != null) {
            TodoList tNext = this.findById(t.getNextTodoList().getId());
            tNext.setPrevTodoList(null);
            todoListRepository.save(tNext);
        }

        t.setPrevTodoList(null);
        t.setNextTodoList(null);
        todoListRepository.delete(todoListID);

        if(this.findAll().size() > 1) {
            for(TodoList t1 : this.findAll()) {
                t1 = this.setPrev(t1);
                t1 = this.setNext(t1);

                todoListRepository.save(t1);
            }
        }

        return user.getTodoLists();
    }
}
