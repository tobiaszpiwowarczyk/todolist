package pl.toby.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.toby.core.misc.BaseEntity;
import pl.toby.todolist.TodoList;
import pl.toby.user.role.UserRole;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends BaseEntity {


    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();


    @Column(unique = true)
    private String username;
    @Size(min = 7)
    private String password;

    private String firstName;
    private String lastName;
    private int age;

    private String[] roles;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("user")
    @OrderBy("createdDate DESC")
    private List<TodoList> todoLists;



    public User() {
        super();
        this.todoLists = new ArrayList<>();
    }

    public User(String username, String password, String firstName, String lastName, int age) {
        this();
        this.username = username;
        this.setPassword(password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String[] getRoles() {
        return roles;
    }

    public void setRoles(UserRole role) {
        this.roles = role.getRoles();
    }

    public List<TodoList> getTodoLists() {
        return todoLists;
    }


    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
