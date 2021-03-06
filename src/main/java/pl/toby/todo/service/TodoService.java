package pl.toby.todo.service;


import pl.toby.todo.Todo;
import pl.toby.todo.prority.TodoPriority;

import java.util.Map;
import java.util.UUID;

public interface TodoService {
    Todo findById(UUID id);

    TodoPriority[] getPriorities();

    Todo addTodo(UUID todoListID, Todo todo);
    Todo updateTodo(Todo todo);
    Map removeTodo(UUID todoID);
}
