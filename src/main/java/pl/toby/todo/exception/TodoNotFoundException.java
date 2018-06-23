package pl.toby.todo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
        code = HttpStatus.NOT_FOUND,
        reason = "Zadanie o podanym identyfikatorze nie istnieje"
)
public class TodoNotFoundException extends RuntimeException {}
