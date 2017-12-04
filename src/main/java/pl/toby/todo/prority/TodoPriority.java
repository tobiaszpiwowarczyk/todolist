package pl.toby.todo.prority;


import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum TodoPriority {

    HIGH("Wysoki"),
    MEDIUM("Średni"),
    LOW("Niski");

    private String value;
    private String label;

    TodoPriority(String label) {
        this.value = this.toString();
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public String getLabel() {
        return label;
    }

}
