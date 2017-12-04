package pl.toby.user.service;


import pl.toby.user.User;

public interface UserService {
    boolean exists(User user);
    User findByUsername(String username);
    User register(User user);
}
