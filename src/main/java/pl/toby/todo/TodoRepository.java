package pl.toby.todo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TodoRepository extends CrudRepository<Todo, UUID> {
    List<Todo> findAll();
}
