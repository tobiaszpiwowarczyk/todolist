package pl.toby.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.toby.core.annotation.MController;
import pl.toby.core.misc.Response;
import pl.toby.todo.exception.TodoNotFoundException;
import pl.toby.todo.prority.TodoPriority;
import pl.toby.todo.service.TodoServiceImpl;
import pl.toby.todolist.exception.TodoListNotFoundException;
import pl.toby.todolist.service.TodoListServiceImpl;

import java.util.UUID;

@MController(path = "/api/todo")
public class TodoController {

    private TodoServiceImpl todoService;
    private TodoListServiceImpl todoListService;

    @Autowired
    public TodoController(TodoServiceImpl todoService, TodoListServiceImpl todoListService) {
        this.todoService = todoService;
        this.todoListService = todoListService;
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "{id}",
            method = RequestMethod.GET
    )
    public Response<Todo> findById(@PathVariable UUID id) {
        
        if(todoService.findById(id) == null)
            throw new TodoNotFoundException();
        
        return new Response<>(HttpStatus.OK, todoService.findById(id));
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "priorities",
            method = RequestMethod.GET
    )
    public Response<TodoPriority[]> getPriorities() {
        return new Response<>(HttpStatus.OK, todoService.getPriorities());
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "{todoListID}/add",
            method = RequestMethod.POST
    )
    public Response<Todo> addTodo(@PathVariable UUID todoListID, @RequestBody Todo todo) {

        if(todoListService.findById(todoListID) == null)
            throw new TodoListNotFoundException();

        return new Response<>(HttpStatus.CREATED, todoService.addTodo(todoListID, todo));
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "{todoListID}/{todoID}/update",
            method = RequestMethod.POST
    )
    public Response<Todo> updateTodo(
                @PathVariable UUID todoListID,
                @PathVariable UUID todoID,
                @RequestBody Todo todo) {
        
        if(todoListService.findById(todoListID) == null)
            throw new TodoListNotFoundException();
        
        if(todoService.findById(todoID) == null)
            throw new TodoNotFoundException();
        
        return new Response<>(HttpStatus.OK, todoService.updateTodo(todoListID, todoID, todo));
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "{todoID}/remove",
            method = RequestMethod.DELETE
    )
    public Response<String> removeTodo(@PathVariable UUID todoID) {
        return new Response<>(
            HttpStatus.OK,
            todoService.removeTodo(todoID)
        );
    }
    

    // --------------------------------------------------------------------------------------------------------
    
    @ExceptionHandler(TodoNotFoundException.class)
    public Response<String> handleTodoNotFoundException(Exception e) {
        return new Response<>(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
    }
}
