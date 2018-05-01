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
        return todoListRepository.findById(id);
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public TodoList addTodoList(TodoList todoList, User user) {

        todoList.setCreatedDate(new Date());
        todoList.setUser(user);

        todoListRepository.save(todoList);
        return todoList;
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
    public String removeTodoList(UUID todoListID) {
        todoListRepository.delete(todoListID);

        return "TodoList has been removed successfully";

    }
}
