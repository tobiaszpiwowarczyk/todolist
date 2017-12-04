package pl.toby.todolist.service;


import pl.toby.todolist.TodoList;
import pl.toby.user.User;

import java.util.List;
import java.util.UUID;

public interface TodoListService {

    boolean exists(TodoList todoList);

    TodoList findById(UUID id);
    List<TodoList> addTodoList(String username, TodoList todoList);
    TodoList updateTodoList(UUID todoListID, TodoList todoList);
    List<TodoList> removeTodoList(String username, UUID todoListID);
}
