package pl.toby.todolist;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.toby.misc.BaseEntity;
import pl.toby.todo.Todo;
import pl.toby.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@Entity
@Table(name = "todolists")
public class TodoList extends BaseEntity {

    @Column(unique = true)
    private String name;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MMM-dd")
    @Builder.Default
    private Date createdDate = new Date();


    @ManyToOne
    @JsonIgnoreProperties("todoLists")
    private User user;

    @OneToMany(mappedBy = "todoList", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("todoList")
    @OrderBy("priority, createdDate DESC")
    @Builder.Default
    private List<Todo> todos = new ArrayList<>();



    public TodoList() {
        super();
    }

    public TodoList(String name, Date createdDate, User user, List<Todo> todos) {
        this();
        this.name = name;
        this.createdDate = createdDate;
        this.user = user;
        this.todos = todos;
    }
}

