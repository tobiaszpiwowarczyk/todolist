package pl.toby.user.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.toby.user.User;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID>, CustomUserRepository {

    List<User> findAll();
    
    @Query(value = "select u from User u where u.username = :username")
    User findByUsername(@Param("username") String username);
}
