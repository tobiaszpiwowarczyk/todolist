package pl.toby.todolist.exception;


public class TodoListNotFoundException extends TodoListException {

    public TodoListNotFoundException() {
        super("Lista o podanym identyfikatorze nie istnieje");
    }

}
