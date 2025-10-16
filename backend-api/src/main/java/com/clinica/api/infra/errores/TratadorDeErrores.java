package com.clinica.api.infra.errores;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class TratadorDeErrores {

    // Manejo de la excepción EntityNotFoundException (error 404)
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<Void> tratarError404() {
        return ResponseEntity.notFound().build();
    }

    // Manejo de la excepción MethodArgumentNotValidException (error 400)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<DatosErrorValidacion>> tratarError400(MethodArgumentNotValidException e) {
        // Mapear los errores de validación a una lista de objetos DatosErrorValidacion
        var errores = e.getBindingResult().getAllErrors().stream()
                .map(error -> new DatosErrorValidacion(((ObjectError) error).getObjectName(), error.getDefaultMessage()))
                .collect(Collectors.toList());

        return ResponseEntity.badRequest().body(errores);
    }

    // Clase interna para representar los datos de error de validación
    private static class DatosErrorValidacion {
        private final String campo;
        private final String error;

        public DatosErrorValidacion(String campo, String error) {
            this.campo = campo;
            this.error = error;
        }

        public String getCampo() {
            return campo;
        }

        public String getError() {
            return error;
        }
    }
}
