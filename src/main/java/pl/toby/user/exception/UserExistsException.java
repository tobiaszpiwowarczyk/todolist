package pl.toby.user.exception;

public class UserExistsException extends UserException {
    public UserExistsException() {
        super("Użytkownik o podanej nazwie użytkownika już istnieje");
    }
}
