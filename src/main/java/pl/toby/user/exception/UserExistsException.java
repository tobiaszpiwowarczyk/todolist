package pl.toby.user.exception;

import org.springframework.dao.DataIntegrityViolationException;


public class UserExistsException extends DataIntegrityViolationException {
    public UserExistsException() {
        super("Użytkownik o podanej nazwie użytkownika już istnieje");
    }
}
