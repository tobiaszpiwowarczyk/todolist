package pl.toby.user.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
        code = HttpStatus.FORBIDDEN,
        reason = "Nie posiadasz wymaganych uprawnień do wykonania danego żądania"
)
public class UserNotAllowedException extends UserException {}
