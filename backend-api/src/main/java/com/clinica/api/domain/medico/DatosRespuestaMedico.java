package com.clinica.api.domain.medico;

import com.clinica.api.domain.direccion.DatosDireccion;

public record DatosRespuestaMedico(Long id, String nombre, String email, String telefono, String string,
                                   DatosDireccion direccion) {
}
