package pl.toby.todolist.service;


import pl.toby.todolist.TodoList;
import pl.toby.user.User;

import java.util.UUID;

public interface TodoListService {

    boolean exists(TodoList todoList);

    TodoList findById(UUID id);
    TodoList addTodoList(TodoList todoList, User user);
    TodoList updateTodoList(TodoList todoList);
    String removeTodoList(UUID todoListID);
}
