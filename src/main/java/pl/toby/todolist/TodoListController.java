package pl.toby.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import pl.toby.annotation.MController;
import pl.toby.todolist.service.TodoListServiceImpl;
import pl.toby.user.service.UserService;

import java.security.Principal;
import java.util.Map;
import java.util.UUID;

@MController(path = "/api/todolist")
public class TodoListController {

    private TodoListServiceImpl todoListService;
    private UserService userService;

    @Autowired
    public TodoListController(TodoListServiceImpl todoListService, UserService userService) {
        this.todoListService = todoListService;
        this.userService = userService;
    }


    // --------------------------------------------------------------------------------------------------------

    @GetMapping("{todoListID}")
    public TodoList findById(@PathVariable UUID todoListID) {
        return todoListService.findById(todoListID);
    }

    // --------------------------------------------------------------------------------------------------------

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TodoList addTodoList(
            @AuthenticationPrincipal Principal principal,
            @RequestBody TodoList todoList) {
        return todoListService.addTodoList(todoList, principal);
    }

    // --------------------------------------------------------------------------------------------------------

    @PutMapping
    public TodoList updateTodoList(
            @AuthenticationPrincipal Principal principal,
            @RequestBody TodoList todoList) {
        return todoListService.updateTodoList(todoList, principal);
    }

    // --------------------------------------------------------------------------------------------------------

    @DeleteMapping("{todoListID}")
    public Map removeTodoList(
            @AuthenticationPrincipal Principal principal,
            @PathVariable UUID todoListID) {
        return todoListService.removeTodoList(todoListID, principal);
    }
}
