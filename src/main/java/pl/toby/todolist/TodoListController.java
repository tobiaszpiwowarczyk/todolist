package pl.toby.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import pl.toby.core.annotation.MController;
import pl.toby.core.misc.Response;
import pl.toby.todolist.exception.TodoListExistsException;
import pl.toby.todolist.exception.TodoListNotFoundException;
import pl.toby.todolist.service.TodoListServiceImpl;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

@MController(path = "/api/todolist")
public class TodoListController {

    @Autowired
    private TodoListServiceImpl todoListService;


    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "{id}",
            method = RequestMethod.GET
    )
    public Response<TodoList> findById(@PathVariable UUID id) {

        if(todoListService.findById(id) == null) {
            throw new TodoListNotFoundException();
        }

        return new Response<>(HttpStatus.OK, todoListService.findById(id));
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "add",
            method = RequestMethod.POST
    )
    public Response<List<TodoList>> addTodoList(
            @AuthenticationPrincipal Principal principal,
            @RequestBody TodoList todoList) {

        if(todoListService.exists(todoList)) {
            throw new TodoListExistsException();
        }

        return new Response<>(
                HttpStatus.CREATED,
                todoListService.addTodoList(principal.getName(), todoList)
        );
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "{todoListID}/update",
            method = RequestMethod.POST
    )
    public Response<TodoList> updateTodoList(
            @PathVariable UUID todoListID,
            @RequestBody TodoList todoList) {

        return new Response<>(
                HttpStatus.OK,
                todoListService.updateTodoList(todoListID, todoList)
        );
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "{todoListID}/remove",
            method = RequestMethod.DELETE
    )
    public Response<List<TodoList>> removeTodoList(
            @AuthenticationPrincipal Principal principal,
            @PathVariable UUID todoListID) {

        return new Response<>(
                HttpStatus.OK,
                todoListService.removeTodoList(principal.getName(), todoListID)
        );
    }

    // --------------------------------------------------------------------------------------------------------




    @ExceptionHandler(TodoListNotFoundException.class)
    public Response<String> handleException(Exception e) {
        return new Response<>(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
    }

    // --------------------------------------------------------------------------------------------------------

    @ExceptionHandler(TodoListExistsException.class)
    public Response<String> handleTodoListExists(Exception e) {
        return new Response<>(HttpStatus.INTERNAL_SERVER_ERROR, e.getLocalizedMessage());
    }
}
