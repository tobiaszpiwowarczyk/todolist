package pl.toby.todolist.exception;


public class TodoListException extends RuntimeException {

    public TodoListException() { super(); }

    public TodoListException(String message) {
        super(message);
    }

}
