package com.clinica.api.domain.direccion;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DatosDireccion(
        @NotBlank
        String calle,
        @NotBlank
        String distrito,
        @NotNull
        String ciudad,
        @NotNull
        String numero,
        @NotBlank
        String complemento) {
}
