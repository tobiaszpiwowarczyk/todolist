package pl.toby.config.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class JwtFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest req,
                         ServletResponse res,
                         FilterChain chain) throws IOException {

        HttpServletRequest request = (HttpServletRequest) req;
        String authHeader = request.getHeader(JwtUtil.AUTHORIZATION);

        if(authHeader == null || !authHeader.startsWith(JwtUtil.TOKEN_PREFIX))
            ((HttpServletResponse) res).sendError(HttpServletResponse.SC_NOT_FOUND);
        else {
            try {
                String token = authHeader.substring(JwtUtil.TOKEN_PREFIX.length());
                Claims claims = JwtUtil.parseClaims(token);
                request.setAttribute("claims", claims);
                SecurityContextHolder.getContext().setAuthentication(getAuthentication(claims));
                chain.doFilter(req, res);
            }
            catch(ExpiredJwtException e) {
                ((HttpServletResponse) res).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Twój token wygasł. Musisz się zalogować ponownie");
            }
            catch(Exception e) {
                ((HttpServletResponse) res).sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getLocalizedMessage());
            }
        }

    }

    private Authentication getAuthentication(Claims claims) {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        List<String> roles = (List<String>) claims.get(JwtUtil.ROLE_CLAIM);

        roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList()).addAll(authorities);

        User principal = new User(claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(
                principal, "", authorities
        );
    }
}
