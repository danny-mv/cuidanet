package com.clinica.api.controller;

import com.clinica.api.paciente.DatosListadoPaciente;
import com.clinica.api.paciente.DatosRegistroPaciente;
import com.clinica.api.paciente.Paciente;
import com.clinica.api.paciente.PacienteRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    @Autowired
    private PacienteRepository repository;

    @PostMapping
    @Transactional
    public void registrar(@RequestBody @Valid DatosRegistroPaciente datos){
        repository.save(new Paciente(datos));
    }

    @GetMapping
    public ResponseEntity<Page<DatosListadoPaciente>> listarPacientes(@PageableDefault(size = 10) Pageable paginacion) {
        // Usamos findAll(Pageable) en lugar de findByActivoTrue
        return ResponseEntity.ok(
                repository.findAll(paginacion)
                        .map(DatosListadoPaciente::new)
        );
    }
}
