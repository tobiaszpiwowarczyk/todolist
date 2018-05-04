package pl.toby.todolist;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TodoListRepository extends CrudRepository<TodoList, UUID> {

    @Query("select tl from TodoList tl order by tl.createdDate")
    List<TodoList> findAll();
    
    @Query("select tl from TodoList tl where tl.name = :name")
    TodoList findByTodoListName(@Param("name") String name);

    TodoList findById(UUID id);
}
