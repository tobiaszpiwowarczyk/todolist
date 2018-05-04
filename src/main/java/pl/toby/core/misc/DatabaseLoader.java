package pl.toby.core.misc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.toby.user.User;
import pl.toby.user.UserBuilder;
import pl.toby.user.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) {
        List<User> userList = new ArrayList<User>(){{
            add(
                    new UserBuilder()
                        .username("jkowalski").password("haslo123").firstName("Jan").lastName("Kowalski").email("jkowalski@gmail.com")
                    .build()
            );
            add(
                    new UserBuilder()
                        .username("anowak").password("haslo123").firstName("Anna").lastName("Nowak").email("anowak@gmail.com")
                    .build()
            );
        }};

        userRepository.save(userList);
    }
}
