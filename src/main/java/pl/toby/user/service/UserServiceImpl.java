package pl.toby.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.toby.user.User;
import pl.toby.user.UserBuilder;
import pl.toby.user.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    // --------------------------------------------------------------------------------------------------------

    @Override
    public boolean exists(User user) {
        return userRepository.findByUsername(user.getUsername()) != null;
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // --------------------------------------------------------------------------------------------------------

    @Override
    public User register(User user) {
        userRepository.save(new UserBuilder(user).build());

        return user;
    }
}
