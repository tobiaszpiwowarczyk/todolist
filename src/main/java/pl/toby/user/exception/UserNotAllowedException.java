package pl.toby.user.exception;

public class UserNotAllowedException extends UserException {

    public UserNotAllowedException() {
        super("Nie posiadasz wymaganych uprawnień do ykonania danego żądania");
    }
}
