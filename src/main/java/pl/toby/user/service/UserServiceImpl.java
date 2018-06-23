package pl.toby.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import pl.toby.config.security.jwt.JwtUtil;
import pl.toby.user.User;
import pl.toby.user.exception.UserBadCredentialsException;
import pl.toby.user.exception.UserException;
import pl.toby.user.exception.UserExistsException;
import pl.toby.user.repository.UserRepository;
import pl.toby.user.role.UserRole;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    // --------------------------------------------------------------------------------------------------------

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    // --------------------------------------------------------------------------------------------------------
    
    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // --------------------------------------------------------------------------------------------------------
    
    @Override
    public Map login(Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if(username == null || password == null)
            throw new AccessDeniedException("Należy wypełnić wszystkie pola w formularzu");

        User user = userRepository.findByUsername(username);

        if(user == null || !User.PASSWORD_ENCODER.matches(password, user.getPassword()))
            throw new UserBadCredentialsException();

        if(user.getRole() == UserRole.LOCKED)
            throw new UserException("Nie można zalogować się na to konto, gdyż jest ono zablokowane");
        
        return Collections.singletonMap("access_token", JwtUtil.createToken(user));
    }
    
    // --------------------------------------------------------------------------------------------------------

    @Override
    public User register(User user) {

        if(userRepository.exists(user)) throw new UserExistsException();
        
        user = User.builder()
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .email(user.getEmail())
                    .username(user.getUsername())
                    .password(user.getPassword())
                .build();
        
        return userRepository.save(user);
    }
}
