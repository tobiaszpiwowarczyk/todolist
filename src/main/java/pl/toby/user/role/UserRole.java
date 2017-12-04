package pl.toby.user.role;


public enum UserRole {

    LOCKED(new String[] {"ROLE_LOCKED"}),
    USER(new String[] {"ROLE_USER"}),
    ADMIN(new String[] {"ROLE_USER", "ROLE_ADMIN"});


    private String[] roles;

    UserRole(String[] roles) {
        this.roles = roles;
    }

    public String[] getRoles() {
        return roles;
    }
}
