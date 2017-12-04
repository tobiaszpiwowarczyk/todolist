package pl.toby.todolist;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import pl.toby.core.misc.BaseEntity;
import pl.toby.todo.Todo;
import pl.toby.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class TodoList extends BaseEntity {

    @Column(unique = true)
    private String name;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MMM-dd")
    private Date createdDate;


    @OneToOne
    @JsonIgnoreProperties({"createdDate", "prevTodoList", "nextTodoList", "user", "todos"})
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private TodoList prevTodoList;

    @OneToOne
    @JsonIgnoreProperties({"createdDate", "prevTodoList", "nextTodoList", "user", "todos"})
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private TodoList nextTodoList;


    @ManyToOne
    @JsonIgnoreProperties("todoLists")
    private User user;

    @OneToMany(mappedBy = "todoList", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("todoList")
    @OrderBy("priority, createdDate DESC")
    private List<Todo> todos;



    public TodoList() {
        super();
        this.todos = new ArrayList<>();
    }

    public TodoList(String name) {
        this();
        this.name = name;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public TodoList getPrevTodoList() {
        return prevTodoList;
    }

    public void setPrevTodoList(TodoList prevTodoList) {
        this.prevTodoList = prevTodoList;
    }

    public TodoList getNextTodoList() {
        return nextTodoList;
    }

    public void setNextTodoList(TodoList nextTodoList) {
        this.nextTodoList = nextTodoList;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Todo> getTodos() {
        return todos;
    }
}
