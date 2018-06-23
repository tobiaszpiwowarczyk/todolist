package pl.toby.config.security.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import pl.toby.user.User;

import java.util.Date;

public class JwtUtil {
    private static final String SECRET_KEY = "ThisIsASecretKey";
    private static final long EXPIRATION_TIME = 864_000_000;
    
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String AUTHORIZATION = "Authorization";
    public static final String ROLE_CLAIM = "roles";
    
    
    public static String createToken(User user) {
        return TOKEN_PREFIX + Jwts.builder()
                .setSubject(user.getUsername())
                .claim(ROLE_CLAIM, user.getRole().getRoles())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }
    
    public static Claims parseClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }
    
}
