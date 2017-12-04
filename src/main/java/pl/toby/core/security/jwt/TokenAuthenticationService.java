package pl.toby.core.security.jwt;


import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static java.util.Collections.emptyList;

@Service
public class TokenAuthenticationService {

    public static void addAuthentication(HttpServletResponse response, String username) {
        response.addHeader(JWTUtil.HEADER_STRING, JWTUtil.generateToken(username));
    }

    public static Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(JWTUtil.HEADER_STRING);

        if(token != null) {
            String user = JWTUtil.parseToken(token);

            return (user != null) ?
                    new UsernamePasswordAuthenticationToken(
                            user,
                            null,
                            emptyList()
                    ) : null;
        }

        return null;
    }


}
