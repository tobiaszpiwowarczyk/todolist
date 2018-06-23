package pl.toby.todo.repository;

import pl.toby.todo.Todo;

import java.util.UUID;

public interface TodoRepositoryCustom {
    boolean existsIn(Todo todo, UUID todoListID);
}
