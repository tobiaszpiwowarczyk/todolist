package pl.toby.user;

import pl.toby.user.role.UserRole;

import java.util.Date;

public class UserBuilder {
    
    private User user = new User();
    
    public UserBuilder() {}
    
    public UserBuilder(User user) {
        if(user.getRoles().size() == 0) user.setRoles(UserRole.USER);
        if(user.getCreatedDate() == null) user.setCreatedDate(new Date());
        this.user = user;
    }
    
    
    public UserBuilder username(String username) {
        this.user.setUsername(username);
        return this;
    }

    public UserBuilder password(String password) {
        this.user.setPassword(password);
        return this;
    }

    public UserBuilder firstName(String firstName) {
        this.user.setFirstName(firstName);
        return this;
    }

    public UserBuilder lastName(String lastName) {
        this.user.setLastName(lastName);
        return this;
    }
    
    public UserBuilder email(String email) {
        this.user.setEmail(email);
        return this;
    }
    
    public UserBuilder role(UserRole role) {
        this.user.setRoles(role);
        return this;
    }

    public UserBuilder createdDate(Date localDate) {
        this.user.setCreatedDate(localDate);
        return this;
    }
    
    public User build() {
        if(user.getRoles().size() == 0) user.setRoles(UserRole.USER);
        if(user.getCreatedDate() == null) user.setCreatedDate(new Date());
        
        return this.user;
    }
}
