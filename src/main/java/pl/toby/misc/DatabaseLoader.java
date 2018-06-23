package pl.toby.misc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.toby.user.User;
import pl.toby.user.repository.UserRepository;
import pl.toby.user.role.UserRole;

import java.util.ArrayList;

@Component
public class DatabaseLoader implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) {
        userRepository.save(
                new ArrayList<User>(){{
                    add(
                            User.builder()
                                    .username("jkowalski").password("haslo123").firstName("Jan").lastName("Kowalski").email("jkowalski@gmail.com")
                                    .build()
                    );
                    add(
                            User.builder()
                                    .username("anowak").password("haslo123").firstName("Anna").lastName("Nowak").email("anowak@gmail.com").role(UserRole.ADMIN)
                                    .build()
                    );
                }}
        );
    }
}
