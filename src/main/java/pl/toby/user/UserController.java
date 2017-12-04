package pl.toby.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pl.toby.core.annotation.MController;
import pl.toby.core.misc.Response;
import pl.toby.core.security.jwt.AccountCredentials;
import pl.toby.core.security.jwt.JWTUtil;
import pl.toby.user.exception.UserExistsException;
import pl.toby.user.service.UserServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@MController(path = "/api/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;


    @RequestMapping(
            value = {"", "/"},
            method = RequestMethod.GET
    )
    public Response<User> findByUsername(@AuthenticationPrincipal Principal principal) {
        return new Response<>(HttpStatus.OK, userService.findByUsername(principal.getName()));
    }

    @RequestMapping(
            value = "register",
            method = RequestMethod.POST
    )
    public Response<User> register(@RequestBody User user) {

        if(userService.exists(user)) {
            throw new UserExistsException();
        }

        return new Response<>(HttpStatus.CREATED, userService.register(user));
    }



    @ExceptionHandler(UserExistsException.class)
    public Response<String> handleUserExist(Exception e) {
        return new Response<>(HttpStatus.INTERNAL_SERVER_ERROR, e.getLocalizedMessage());
    }
}
