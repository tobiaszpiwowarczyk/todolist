package pl.toby.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.toby.core.misc.BaseEntity;
import pl.toby.todolist.TodoList;
import pl.toby.user.role.UserRole;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.*;
import java.util.stream.Collectors;

@Entity
public class User extends BaseEntity implements UserDetails {

    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();


    @Column(unique = true)
    private String username;
    @Size(min = 7)
    private String password;

    private String firstName;
    private String lastName;
    private String email;
    
    @JsonFormat(
            shape = JsonFormat.Shape.STRING,
            pattern = "yyyy-MMM-dd"
    )
    private Date createdDate;

    @ElementCollection
    private List<String> roles;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("user")
    @OrderBy("createdDate DESC")
    private List<TodoList> todoLists;



    public User() {
        super();
        this.roles = new ArrayList<>();
        this.todoLists = new ArrayList<>();
    }

    public User(String username, String password, String firstName, String lastName, String email, UserRole role, Date createdDate) {
        this();
        this.username = username;
        this.setPassword(password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.createdDate = createdDate;
        this.setRoles(role);
    }






    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(UserRole role) {
        this.roles = Arrays.asList(role.getRoles());
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
    
    public boolean hasRole(UserRole role) {
        return roles.containsAll(Collections.singletonList(role.getRoles()));
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
