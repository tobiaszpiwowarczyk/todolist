package pl.toby.core.misc;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import pl.toby.todolist.exception.TodoListExistsException;
import pl.toby.todolist.exception.TodoListNotFoundException;
import pl.toby.user.exception.UserException;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BaseController {

    @ExceptionHandler(TodoListExistsException.class)
    public Response<String> handleTodoListExistsException(Exception e) {
        return new Response<>(HttpStatus.INTERNAL_SERVER_ERROR, e.getLocalizedMessage());
    }

    // --------------------------------------------------------------------------------------------------------

    @ExceptionHandler(TodoListNotFoundException.class)
    public Response<String> handleTodoListNotFoundException(Exception e) {
        return new Response<>(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
    }

    // --------------------------------------------------------------------------------------------------------
    
    @ExceptionHandler(UserException.class)
    public Response<String> handleUserNotLoginException(Exception e) {
        return new Response<>(HttpStatus.UNAUTHORIZED, e.getLocalizedMessage());
    }

}
