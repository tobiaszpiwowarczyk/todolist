package pl.toby.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pl.toby.core.annotation.MController;
import pl.toby.core.misc.BaseController;
import pl.toby.core.misc.Response;
import pl.toby.todolist.exception.TodoListExistsException;
import pl.toby.todolist.exception.TodoListNotFoundException;
import pl.toby.todolist.service.TodoListServiceImpl;
import pl.toby.user.User;
import pl.toby.user.exception.UserException;
import pl.toby.user.exception.UserNotAllowedException;
import pl.toby.user.service.UserService;

import java.security.Principal;
import java.util.UUID;

@MController(path = "/api/todolist")
public class TodoListController extends BaseController {

    private TodoListServiceImpl todoListService;
    private UserService userService;

    @Autowired
    public TodoListController(TodoListServiceImpl todoListService, UserService userService) {
        this.todoListService = todoListService;
        this.userService = userService;
    }


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
    public Response<TodoList> addTodoList(
            @AuthenticationPrincipal Principal principal,
            @RequestBody TodoList todoList) {

        if(todoListService.exists(todoList)) {
            throw new TodoListExistsException();
        }

        User user = userService.findByUsername(principal.getName());

        return new Response<>(
                HttpStatus.CREATED,
                todoListService.addTodoList(todoList, user)
        );
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "{todoListID}/update",
            method = RequestMethod.POST
    )
    public Response<TodoList> updateTodoList(
            @AuthenticationPrincipal Principal principal,
            @PathVariable UUID todoListID,
            @RequestBody TodoList todoList) {
        if(!todoListService.findById(todoListID).getUser().getUsername().equals(principal.getName())) {
            throw new UserNotAllowedException();
        }

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
    public Response<String> removeTodoList(
            @AuthenticationPrincipal Principal principal,
            @PathVariable UUID todoListID) {

        if(!todoListService.findById(todoListID).getUser().getUsername().equals(principal.getName())) {
            throw new UserNotAllowedException();
        }

        return new Response<>(
                HttpStatus.OK,
                todoListService.removeTodoList(todoListID)
        );
    }
}
