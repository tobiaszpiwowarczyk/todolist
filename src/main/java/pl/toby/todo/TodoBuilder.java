package pl.toby.todo;

import pl.toby.todo.prority.TodoPriority;
import pl.toby.todolist.TodoList;

import java.util.Date;

public class TodoBuilder {
    
    private Todo todo = new Todo();
    
    
    public TodoBuilder() {}
    
    public TodoBuilder(Todo todo) {
        this.todo = todo;
    }
    
    
    public TodoBuilder content(String content) {
        this.todo.setContent(content);
        return this;
    }
    
    public TodoBuilder createdDate(Date date) {
        this.todo.setCreatedDate(date);
        return this;
    }
    
    public TodoBuilder completed(boolean completed) {
        this.todo.setCompleted(completed);
        return this;
    }
    
    public TodoBuilder priority(TodoPriority todoPriority) {
        this.todo.setPriority(todoPriority);
        return this;
    }

    public TodoBuilder todoList(TodoList todoList) {
        this.todo.setTodoList(todoList);
        return this;
    }
    
    public Todo build() {
        if(this.todo.getContent() == null) this.todo.setContent("");
        if(this.todo.getCreatedDate() == null) this.todo.setCreatedDate(new Date());
        if(this.todo.getPriority() == null) this.todo.setPriority(TodoPriority.LOW);
        if(this.todo.getTodoList() == null) this.todo.setTodoList(new TodoList());
        
        return this.todo;
    }
}
