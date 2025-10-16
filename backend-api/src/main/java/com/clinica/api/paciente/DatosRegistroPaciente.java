package com.clinica.api.paciente;

import com.clinica.api.domain.direccion.DatosDireccion;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DatosRegistroPaciente(
       @NotBlank String nombre,
       @NotBlank String email,
       @NotBlank String telefono,
       @NotBlank String  documentoIdentidad,
       @NotNull @Valid DatosDireccion direccion
) {
}
