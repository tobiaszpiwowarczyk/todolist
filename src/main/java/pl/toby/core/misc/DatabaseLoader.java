package pl.toby.core.misc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.toby.user.User;
import pl.toby.user.UserRepository;
import pl.toby.user.role.UserRole;

import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) {
        List<User> userList = new ArrayList<User>(){{
            add(new User("jkowalski", "haslo123", "Jan", "Kowalski", 18, UserRole.USER));
            add(new User("anowak", "haslo123", "Anna", "Nowak", 21, UserRole.ADMIN));
        }};

        userRepository.save(userList);
    }
}
