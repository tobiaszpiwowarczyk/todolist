package pl.toby.todo.prority;

public class TodoPriorityConverter {
    
    public static TodoPriority convert(String priority) {
        return TodoPriority.valueOf(priority);
    }
}
