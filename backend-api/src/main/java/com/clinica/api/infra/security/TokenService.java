package com.clinica.api.infra.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.clinica.api.domain.usuarios.Usuario;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${api.secret}")
    private String apiSecret; // Clave secreta para firmar el token





    public String generarToken(Usuario usuario) {
        System.out.println("Clave secreta: " + apiSecret);

        System.out.println("estoy en este momento de la aplicacion");
        try {
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            String token = JWT.create()
                    .withIssuer("clinica_api")
                    .withSubject(usuario.getLogin())
                    .withClaim("id", usuario.getId())
                    .withExpiresAt(generarFechaExpiracion())
                    .sign(algorithm);

            // Imprime el token en consola
            System.out.println("Token generado: verifico desde token service " + token);

            return token;
        } catch (JWTCreationException exception) {
            throw new RuntimeException("Error al crear el token", exception);
        }
    }


    public String getSubject(String token){
        DecodedJWT verifier = null;
        try {
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            verifier = JWT.require(algorithm)
                    .withIssuer("clinica api")
                    .build()
                    .verify(token);
        } catch (JWTVerificationException exception){
            System.out.println("Token inválido: " + exception.getMessage());
            throw new RuntimeException("Token inválido: " + exception.getMessage());
        }


        if (verifier == null || verifier.getSubject() == null) {
            throw new RuntimeException("Token inválido: no se pudo extraer el subject");
        }

        return verifier.getSubject();
    }

    private static Instant generarFechaExpiracion(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-05:00"));
    }

}
