package com.clinica.api.controller;

import com.clinica.api.domain.usuarios.DatosAutenticacionUsuario;
import com.clinica.api.domain.usuarios.Usuario;
import com.clinica.api.infra.security.DatosJWTtoken;
import com.clinica.api.infra.security.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AutenticacionController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity autenticarUsuario(@RequestBody @Valid DatosAutenticacionUsuario datosAutenticacionUsuario){
        System.out.println("Solicitud recibida en /login");

        System.out.println("Login recibido: " + datosAutenticacionUsuario.login());
        System.out.println("Clave recibida: " + datosAutenticacionUsuario.clave());

        Authentication authToken = new UsernamePasswordAuthenticationToken(
                datosAutenticacionUsuario.login(),
                datosAutenticacionUsuario.clave()
        );

        try {
            var usuarioAutenticado = authenticationManager.authenticate(authToken);
            System.out.println("Usuario autenticado correctamente");

            // ✅ Usamos la instancia inyectada
            var JWTtoken = tokenService.generarToken((Usuario) usuarioAutenticado.getPrincipal());

            System.out.println("Token enviado: " + JWTtoken);

            return ResponseEntity.ok(new DatosJWTtoken(JWTtoken));
        } catch (Exception e) {
            System.out.println("Error de autenticación: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        }
    }
}
