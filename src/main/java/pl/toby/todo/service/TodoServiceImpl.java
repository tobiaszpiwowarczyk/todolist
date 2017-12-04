package pl.toby.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.toby.todo.Todo;
import pl.toby.todo.TodoRepository;
import pl.toby.todo.prority.TodoPriority;
import pl.toby.todolist.TodoList;
import pl.toby.todolist.TodoListRepository;

import java.util.Date;
import java.util.List;
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
    public List<Todo> addTodo(UUID todoListID, Todo todo) {

        TodoList todoList = todoListRepository.findOne(todoListID);

        todo.setCreatedDate(new Date());
        todo.setCompleted(false);
        todo.setPriority(TodoPriority.LOW);
        todo.setTodoList(todoList);

        todoRepository.save(todo);

        return todoList.getTodos();
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public List<Todo> updateTodo(UUID todoListID, UUID todoID, Todo todo) {

        TodoList todoList = todoListRepository.findOne(todoListID);
        Todo todoFound = todoRepository.findOne(todoID);

        if(todo.getContent() != null) todoFound.setContent(todo.getContent());
        todoFound.setCompleted(todo.isCompleted());
        if (todo.getPriority() != null) {
            todoFound.setPriority(TodoPriority.valueOf(todo.getPriority().toString()));
        }

        todoRepository.save(todoFound);

        return todoList.getTodos();
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public void removeTodo(UUID todoID) {
        todoRepository.delete(todoID);
    }
}
