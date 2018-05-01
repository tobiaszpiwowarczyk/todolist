package pl.toby.core.misc;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import pl.toby.todolist.exception.TodoListException;
import pl.toby.user.exception.UserException;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BaseController {


    @ExceptionHandler(TodoListException.class)
    public Response<String> handleException(Exception e) {
        return new Response<>(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
    }


    // --------------------------------------------------------------------------------------------------------

    @ExceptionHandler(UserException.class)
    public Response<String> handleUserNotLoginException(Exception e) {
        return new Response<>(HttpStatus.UNAUTHORIZED, e.getLocalizedMessage());
    }

}
