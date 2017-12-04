package pl.toby.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.toby.user.User;
import pl.toby.user.UserRepository;
import pl.toby.user.role.UserRole;

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
        user.setRoles(UserRole.USER);
        userRepository.save(user);

        return user;
    }
}
