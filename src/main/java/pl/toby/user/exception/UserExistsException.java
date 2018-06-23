package pl.toby.user.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
        code = HttpStatus.CONFLICT,
        reason = "Użytkownik o podanej nazwie użytkownika już istnieje"
)
public class UserExistsException extends UserException {}
