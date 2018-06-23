package pl.toby.user.service;


import pl.toby.user.User;

import java.util.List;
import java.util.Map;

public interface UserService {
    User findByUsername(String username);
    Map login(Map<String, String> credentials);
    User register(User user);

    List<User> findAll();
}
