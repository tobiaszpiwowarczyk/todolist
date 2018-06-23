package pl.toby.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import pl.toby.annotation.MController;
import pl.toby.user.service.UserServiceImpl;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@MController(path = "/api/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;


    @RequestMapping(
            value = "all",
            method = RequestMethod.GET
    )
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<User> findAll() {
        return userService.findAll();
    }

    // --------------------------------------------------------------------------------------------------------
    
    @RequestMapping(
            value = "account",
            method = RequestMethod.GET
    )
    public User getAccount(@AuthenticationPrincipal Principal principal) {
        return userService.findByUsername(principal.getName());
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "login",
            method = RequestMethod.POST
    )
    public Map login(@RequestBody Map<String, String> credentials) {
        return userService.login(credentials);
    }

    // --------------------------------------------------------------------------------------------------------

    @RequestMapping(
            value = "register",
            method = RequestMethod.POST
    )
    @ResponseStatus(HttpStatus.CREATED)
    public User register(@RequestBody User user) {
        return userService.register(user);
    }
}
