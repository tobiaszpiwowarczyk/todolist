package pl.toby.todolist.service;


import pl.toby.todolist.TodoList;

import java.security.Principal;
import java.util.Map;
import java.util.UUID;

public interface TodoListService {
    TodoList findById(UUID id);
    TodoList addTodoList(TodoList todoList, Principal principal);
    TodoList updateTodoList(TodoList todoList, Principal principal);
    Map removeTodoList(UUID todoListID, Principal principal);
}
