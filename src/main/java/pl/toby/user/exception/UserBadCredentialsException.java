package pl.toby.user.exception;


public class UserBadCredentialsException extends UserException {

    public UserBadCredentialsException() {
        super("Nazwa użytkownika lub hasło jest nieprawidłowe");
    }

}
