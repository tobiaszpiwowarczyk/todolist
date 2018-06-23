package pl.toby.todolist.repository;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.toby.todolist.TodoList;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.math.BigInteger;

@Repository
@Transactional
public class TodoListRepositoryImpl implements TodoListRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public boolean exists(TodoList todoList) {

        Query query = entityManager.createNativeQuery("select count(tl.*) from todolists tl where tl.id = :id or tl.name = :name")
                .setParameter("id", todoList.getId())
                .setParameter("name", todoList.getName());

        return BigInteger.class.cast(query.getSingleResult()).equals(BigInteger.ONE);
    }
}
