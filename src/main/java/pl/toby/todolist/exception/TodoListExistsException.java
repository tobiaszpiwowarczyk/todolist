package pl.toby.todolist.exception;


import org.springframework.dao.DataIntegrityViolationException;

public class TodoListExistsException extends DataIntegrityViolationException {
    public TodoListExistsException() {
        super("Lista o podanej nazwie już istnieje");
    }
}
