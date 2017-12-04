package pl.toby.todo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import pl.toby.core.misc.BaseEntity;
import pl.toby.todo.prority.TodoPriority;
import pl.toby.todolist.TodoList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
public class Todo extends BaseEntity {

    private String content;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MMM-dd")
    private Date createdDate;
    private boolean completed;

    private TodoPriority priority;

    @ManyToOne
    @JsonIgnoreProperties("todos")
    private TodoList todoList;


    public Todo() {
        super();
    }

    public Todo(String content) {
        this();
        this.content = content;
    }

    public Todo(String content, boolean completed) {
        this();
        this.content = content;
        this.completed = completed;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public TodoPriority getPriority() {
        return priority;
    }

    public void setPriority(TodoPriority priority) {
        this.priority = priority;
    }

    public TodoList getTodoList() {
        return todoList;
    }

    public void setTodoList(TodoList todoList) {
        this.todoList = todoList;
    }

    @Override
    public String toString() {
        return "Todo{" +
                ", content='" + content + '\'' +
                ", createdDate=" + createdDate +
                ", completed=" + completed +
                '}';
    }
}
