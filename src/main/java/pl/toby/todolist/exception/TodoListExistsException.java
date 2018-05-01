package pl.toby.todolist.exception;


public class TodoListExistsException extends TodoListException {
    public TodoListExistsException() {
        super("Lista o podanej nazwie już istnieje");
    }
}
