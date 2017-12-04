package pl.toby.todo.service;


import pl.toby.todo.Todo;
import pl.toby.todo.prority.TodoPriority;

import java.util.List;
import java.util.UUID;

public interface TodoService {
    Todo findById(UUID id);

    TodoPriority[] getPriorities();

    List<Todo> addTodo(UUID todoListID, Todo todo);
    List<Todo> updateTodo(UUID todoListID, UUID todoID, Todo todo);
    void removeTodo(UUID todoID);
}
