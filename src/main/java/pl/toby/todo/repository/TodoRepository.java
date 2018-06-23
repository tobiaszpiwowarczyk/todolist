package pl.toby.todo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.toby.todo.Todo;

import java.util.List;
import java.util.UUID;

@Repository
public interface TodoRepository extends CrudRepository<Todo, UUID>, TodoRepositoryCustom {
    List<Todo> findAll();
}
