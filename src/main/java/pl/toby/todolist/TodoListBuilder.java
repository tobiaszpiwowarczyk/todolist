package pl.toby.todolist;

import pl.toby.user.User;

import java.util.Date;

public class TodoListBuilder {
    
    private TodoList todoList = new TodoList();
    
    
    public TodoListBuilder name(String name) {
        this.todoList.setName(name);
        return this;
    }

    public TodoListBuilder createdDate(Date date) {
        this.todoList.setCreatedDate(date);
        return this;
    }

    public TodoListBuilder user(User user) {
        this.todoList.setUser(user);
        return this;
    }

    public TodoList build() {
        
        if(this.todoList.getCreatedDate() == null)
            this.todoList.setCreatedDate(new Date());
        
        
        
        return this.todoList;
    }
}
