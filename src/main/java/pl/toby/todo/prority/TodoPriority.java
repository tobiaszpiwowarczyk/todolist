package pl.toby.todo.prority;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Getter;

@JsonFormat(shape = Shape.OBJECT)
public enum TodoPriority {

    HIGH("Wysoki"),
    MEDIUM("Średni"),
    LOW("Niski");

    @Getter
    private String value;

    @Getter
    private String label;

    TodoPriority(String label) {
        this.value = this.toString();
        this.label = label;
    }

}
