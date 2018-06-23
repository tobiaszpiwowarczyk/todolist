package pl.toby.todolist.repository;

import pl.toby.todolist.TodoList;

public interface TodoListRepositoryCustom {
    boolean exists(TodoList todoList);
}
