package pl.toby.todolist.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
        code = HttpStatus.CONFLICT,
        reason = "Lista o podanej nazwie już istnieje"
)
public class TodoListExistsException extends RuntimeException {}
