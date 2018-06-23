package pl.toby.user.repository;

import pl.toby.user.User;

public interface CustomUserRepository {
    boolean exists(User user);
    boolean exists(String username);
}
