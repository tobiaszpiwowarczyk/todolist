package pl.toby.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.toby.todo.Todo;
import pl.toby.todo.exception.TodoNotFoundException;
import pl.toby.todo.prority.TodoPriority;
import pl.toby.todo.prority.TodoPriorityConverter;
import pl.toby.todo.repository.TodoRepository;
import pl.toby.todolist.exception.TodoListNotFoundException;
import pl.toby.todolist.repository.TodoListRepository;

import java.util.Collections;
import java.util.Map;
import java.util.UUID;

@Service
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;
    private TodoListRepository todoListRepository;

    @Autowired
    public TodoServiceImpl(TodoRepository todoRepository, TodoListRepository todoListRepository) {
        this.todoRepository = todoRepository;
        this.todoListRepository = todoListRepository;
    }


    // --------------------------------------------------------------------------------------------------------

    @Override
    public Todo findById(UUID id) {

        if (!todoRepository.exists(id))
            throw new TodoNotFoundException();

        return todoRepository.findOne(id);
    }

    @Override
    public TodoPriority[] getPriorities() {
        return TodoPriority.values();
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public Todo addTodo(UUID todoListID, Todo todo) {

        if(!todoListRepository.exists(todoListID))
            throw new TodoListNotFoundException();


        return todoRepository.save(
                Todo.builder()
                        .content(todo.getContent())
                        .todoList(todoListRepository.findOne(todoListID))
                        .build()
        );
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public Todo updateTodo(Todo todo) {

        if (!todoRepository.exists(todo.getId()))
            throw new TodoNotFoundException();

        Todo todoFound = todoRepository.findOne(todo.getId());
        todoFound.setContent(todo.getContent());
        todoFound.setCompleted(todo.isCompleted());
        todoFound.setPriority(TodoPriorityConverter.convert(todo.getPriority().toString()));

        return todoRepository.save(todoFound);
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public Map removeTodo(UUID todoID) {

        if (!todoRepository.exists(todoID))
            throw new TodoNotFoundException();

        todoRepository.delete(todoID);

        return Collections.singletonMap("state", "Zadanie zostało usunięte pomyślnie");
    }
}
