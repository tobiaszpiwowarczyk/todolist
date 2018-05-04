package pl.toby.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.toby.todo.Todo;
import pl.toby.todo.TodoBuilder;
import pl.toby.todo.TodoRepository;
import pl.toby.todo.prority.TodoPriority;
import pl.toby.todo.prority.TodoPriorityConverter;
import pl.toby.todolist.TodoListRepository;

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
        return todoRepository.findOne(id);
    }

    @Override
    public TodoPriority[] getPriorities() {
        return TodoPriority.values();
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public Todo addTodo(UUID todoListID, Todo todo) {
        
        todo = new TodoBuilder()
                .content(todo.getContent())
                .todoList(todoListRepository.findOne(todoListID))
                .build();
        
        todoRepository.save(todo);

        return todo;
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public Todo updateTodo(UUID todoListID, UUID todoID, Todo todo) {
        
        todo = new TodoBuilder(todo).build();

        Todo todoFound = todoRepository.findOne(todoID);
        todoFound = new TodoBuilder(todoFound)
                .content(todo.getContent())
                .completed(todo.isCompleted())
                .priority(TodoPriorityConverter.convert(todo.getPriority().toString()))
                .build();

        todoRepository.save(todoFound);

        return todoFound;
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public String removeTodo(UUID todoID) {
        todoRepository.delete(todoID);

        return "Todo object has been removed successfully";
    }
}
