package pl.toby.todo.exception;

public class TodoNotFoundException extends RuntimeException {
    public TodoNotFoundException() {
        super("Zadanie o podanym identyfikatorze nie istnieje");
    }
}
