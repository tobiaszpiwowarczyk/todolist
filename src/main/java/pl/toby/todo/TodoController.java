package pl.toby.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.toby.annotation.MController;
import pl.toby.todo.prority.TodoPriority;
import pl.toby.todo.service.TodoServiceImpl;

import java.util.Map;
import java.util.UUID;

@MController(path = "/api/todo")
public class TodoController {

    private TodoServiceImpl todoService;

    @Autowired
    public TodoController(TodoServiceImpl todoService) {
        this.todoService = todoService;
    }

    // --------------------------------------------------------------------------------------------------------

    @GetMapping("{id}")
    public Todo findById(@PathVariable UUID id) {
        return todoService.findById(id);
    }

    // --------------------------------------------------------------------------------------------------------

    @GetMapping("priorities")
    public TodoPriority[] getPriorities() {
        return todoService.getPriorities();
    }

    // --------------------------------------------------------------------------------------------------------

    
    @PostMapping("{todoListID}")
    @ResponseStatus(HttpStatus.CREATED)
    public Todo addTodo(@PathVariable UUID todoListID, @RequestBody Todo todo) {
        return todoService.addTodo(todoListID, todo);
    }

    // --------------------------------------------------------------------------------------------------------

    @PutMapping
    public Todo updateTodo(@RequestBody Todo todo) {
        return todoService.updateTodo(todo);
    }

    // --------------------------------------------------------------------------------------------------------

    @DeleteMapping("{todoID}")
    public Map removeTodo(@PathVariable UUID todoID) {
        return todoService.removeTodo(todoID);
    }
}
