package pl.toby.todolist.exception;


public class TodoListNotFoundException extends RuntimeException {

    public TodoListNotFoundException() {
        super("Lista o podanym identyfikatorze nie istnieje");
    }

}
