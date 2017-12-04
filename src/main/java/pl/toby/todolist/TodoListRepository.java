package pl.toby.todolist;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TodoListRepository extends CrudRepository<TodoList, UUID> {

    @Query(value = "select tl from TodoList tl order by tl.createdDate")
    List<TodoList> findAll();
}
