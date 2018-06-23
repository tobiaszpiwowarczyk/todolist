package pl.toby.todolist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.toby.todolist.TodoList;
import pl.toby.todolist.exception.TodoListExistsException;
import pl.toby.todolist.exception.TodoListNotFoundException;
import pl.toby.todolist.repository.TodoListRepository;
import pl.toby.user.exception.UserNotAllowedException;
import pl.toby.user.repository.UserRepository;

import java.security.Principal;
import java.util.Collections;
import java.util.Map;
import java.util.UUID;

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

    @Override
    public TodoList findById(UUID id) {
        
        if(!todoListRepository.exists(id)) 
            throw new TodoListNotFoundException();
        
        return todoListRepository.findById(id);
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public TodoList addTodoList(TodoList todoList, Principal principal) {
        
        if(todoListRepository.exists(todoList))
            throw new TodoListExistsException();
        
        return todoListRepository.save(
                TodoList.builder().name(todoList.getName()).user(
                        userRepository.findByUsername(principal.getName())
                ).build()
        );
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public TodoList updateTodoList(TodoList todoList, Principal principal) {
        
        if (!todoListRepository.exists(todoList.getId()))
            throw new TodoListNotFoundException();

        if(todoListRepository.findByName(todoList.getName()) != null)
            throw new TodoListExistsException();
        
        if (!todoListRepository.findById(todoList.getId()).getUser().getUsername().equals(principal.getName()))
            throw new UserNotAllowedException();


        TodoList todoListFound = todoListRepository.findOne(todoList.getId());
        todoListFound.setName(todoList.getName());
        
        return todoListRepository.save(todoListFound);
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public Map removeTodoList(UUID todoListID, Principal principal) {
        
        if (!todoListRepository.findById(todoListID).getUser().getUsername().equals(principal.getName()))
            throw new UserNotAllowedException();
        
        if (!todoListRepository.exists(todoListID))
            throw new TodoListNotFoundException();


        todoListRepository.delete(todoListID);

        return Collections.singletonMap("state", "Lista zadań została usunięta pomyślnie");

    }
}
