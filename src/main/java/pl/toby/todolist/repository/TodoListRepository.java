package pl.toby.todolist.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.toby.todolist.TodoList;

import java.util.List;
import java.util.UUID;

@Repository
public interface TodoListRepository extends JpaRepository<TodoList, UUID>, TodoListRepositoryCustom {

    @Query("select tl from TodoList tl order by tl.createdDate")
    List<TodoList> findAll();

    TodoList findById(UUID id);
    TodoList findByName(String name);
}
