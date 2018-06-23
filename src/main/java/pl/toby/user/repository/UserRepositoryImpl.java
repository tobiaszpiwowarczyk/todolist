package pl.toby.user.repository;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.toby.user.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.math.BigInteger;

@Repository
@Transactional
public class UserRepositoryImpl implements CustomUserRepository {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    @Override
    public boolean exists(User user) {

        Query query = entityManager.createNativeQuery("SELECT count(*) FROM users WHERE users.id = :id OR users.username = :username")
                .setParameter("id", user.getId())
                .setParameter("username", user.getUsername());
        
        return BigInteger.class.cast(query.getSingleResult()).equals(BigInteger.ONE);
    }

    @Override
    public boolean exists(String username) {
        Query query = entityManager.createNativeQuery("SELECT count(*) FROM users WHERE users.username = :username")
                .setParameter("username", username);

        return BigInteger.class.cast(query.getSingleResult()).equals(BigInteger.ONE);
    }
}
