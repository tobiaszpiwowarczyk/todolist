package pl.toby.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pl.toby.core.annotation.MController;
import pl.toby.core.misc.BaseController;
import pl.toby.core.misc.Response;
import pl.toby.core.security.jwt.JwtUtil;
import pl.toby.user.exception.UserBadCredentialsException;
import pl.toby.user.exception.UserException;
import pl.toby.user.exception.UserExistsException;
import pl.toby.user.role.UserRole;
import pl.toby.user.service.UserServiceImpl;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@MController(path = "/api/user")
public class UserController extends BaseController {

    @Autowired
    private UserServiceImpl userService;


    @RequestMapping(
            value = "account",
            method = RequestMethod.GET
    )
    public Response<User> findByUsername(@AuthenticationPrincipal Principal principal) {
        return new Response<>(HttpStatus.OK, userService.findByUsername(principal.getName()));
    }



    @RequestMapping(
            value = "login",
            method = RequestMethod.POST
    )
    public Response<Map<String, Object>> login(@RequestBody Map<String, String> credentials) {

        String username = credentials.get("username");
        String password = credentials.get("password");

        if(username == null || password == null) throw new AccessDeniedException("Należy wypełnić wszystkie pola w formularzu");
        
        User user = userService.findByUsername(username);
        
        if(user == null || !User.PASSWORD_ENCODER.matches(password, user.getPassword())) throw new UserBadCredentialsException();
        if(user.hasRole(UserRole.LOCKED)) throw new UserException("Nie można zalogować się na to konto, gdyż jest ono zablokowane");

        return new Response<>(
                HttpStatus.OK,
                new HashMap<String, Object>() {{
                    put("token", JwtUtil.createToken(user));
                    put("userData", new HashMap<String, Object>() {{
                        put("username", user.getUsername());
                        put("firstName", user.getFirstName());
                        put("lastName", user.getLastName());
                    }});
                }}
        );
    }



    @RequestMapping(
            value = "register",
            method = RequestMethod.POST
    )
    public Response<User> register(@RequestBody User user) {

        if(userService.exists(user)) throw new UserExistsException();

        return new Response<>(HttpStatus.CREATED, userService.register(user));
    }
}
