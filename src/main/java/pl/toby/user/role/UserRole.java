package pl.toby.user.role;


import lombok.Getter;

import java.util.Arrays;
import java.util.List;

public enum UserRole {

    LOCKED(Arrays.asList("ROLE_LOCKED")),
    USER(Arrays.asList("ROLE_USER")),
    ADMIN(Arrays.asList("ROLE_USER", "ROLE_ADMIN"));


    @Getter private List<String> roles;

    UserRole(List<String> roles) {
        this.roles = roles;
    }
}
