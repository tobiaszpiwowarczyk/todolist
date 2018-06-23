package pl.toby.todo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.toby.misc.BaseEntity;
import pl.toby.todo.prority.TodoPriority;
import pl.toby.todolist.TodoList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Date;

@EqualsAndHashCode(callSuper = false)
@Data
@AllArgsConstructor
@Builder
@Entity
@Table(name = "todos")
public class Todo extends BaseEntity {

    @Column(nullable = false)
    private String content;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MMM-dd")
    @Builder.Default
    private Date createdDate = new Date();
    private boolean completed;

    @Builder.Default
    private TodoPriority priority = TodoPriority.LOW;

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
}
