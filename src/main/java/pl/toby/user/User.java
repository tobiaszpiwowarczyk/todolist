package pl.toby.user;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import pl.toby.misc.BaseEntity;
import pl.toby.todolist.TodoList;
import pl.toby.user.role.UserRole;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@EqualsAndHashCode(callSuper = false)
@Data
@NoArgsConstructor
@Builder
@Table(name = "users")
public class User extends BaseEntity implements UserDetails {

    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();


    @Column(unique = true)
    private String username;
    private String password;

    private String firstName;
    private String lastName;
    private String email;
    
    @JsonFormat(
            shape = JsonFormat.Shape.STRING,
            pattern = "yyyy-MMM-dd"
    )
    @Builder.Default
    private Date createdDate = new Date();

    @Builder.Default
    private UserRole role = UserRole.USER;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("user")
    @OrderBy("createdDate DESC")
    @Builder.Default
    private List<TodoList> todoLists = new ArrayList<>();
    

    public User(String username, String password, String firstName, String lastName, String email,  Date createdDate, UserRole role, List<TodoList> todoLists) {
        super();
        this.username = username;
        this.setPassword(password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.createdDate = createdDate;
        this.role = role;
        this.todoLists = todoLists;
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
        return role.getRoles().stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }


    
    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }
    

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", role=" + role.getRoles() +
                '}';
    }
}
