package pl.toby.todo.repository;

import org.springframework.stereotype.Repository;
import pl.toby.todo.Todo;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.UUID;

@Repository
public class TodoRepositoryImpl implements TodoRepositoryCustom {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    @Override
    public boolean existsIn(Todo todo, UUID todoListID) {

        Query query = entityManager.createNativeQuery("SELECT COUNT(*) FROM todos");
        
        return false;
    }
}
