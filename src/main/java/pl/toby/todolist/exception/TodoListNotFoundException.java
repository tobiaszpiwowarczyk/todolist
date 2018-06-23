package pl.toby.todolist.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
        code = HttpStatus.NOT_FOUND,
        reason = "Lista o podanym identyfikatorze nie istnieje"
)
public class TodoListNotFoundException extends RuntimeException {}
