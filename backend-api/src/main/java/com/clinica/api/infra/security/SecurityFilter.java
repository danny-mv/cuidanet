package com.clinica.api.infra.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    // Este método indica qué endpoints deben saltarse el filtro
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String path = request.getRequestURI();
        return path.equals("/login"); // Evita filtrar el endpoint de login
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        System.out.println("El filtro está activo");

        // Obtiene el token de la cabecera Authorization
        String token = request.getHeader("Authorization");
        System.out.println("Token recibido: " + token);

        // Verifica si el token es nulo o vacío
        if (token == null || token.isEmpty()) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Token no proporcionado");
            return;
        }

        // Verifica que el token comience con "Bearer "
        if (!token.startsWith("Bearer ")) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Token mal formado");
            return;
        } else {
            System.out.println("Token proporcionado correctamente");
        }

        // Elimina el prefijo "Bearer " del token
        token = token.replace("Bearer ", "");
        System.out.println("Token sin prefijo: " + token);

        try {
            String subject = tokenService.getSubject(token);
            System.out.println("Subject del token: " + subject);

            // Crea el objeto de autenticación y lo guarda en el contexto
            UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(subject, null, null);
            SecurityContextHolder.getContext().setAuthentication(authentication);

        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Token inválido");
            return;
        }

        // Continúa la cadena de filtros
        filterChain.doFilter(request, response);
        System.out.println("Token validado: " + token);
    }
}
