package com.clinica.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
		var encoder = new BCryptPasswordEncoder();
		String encodedPassword = encoder.encode("clave123");
		System.out.println("Contraseña encriptada: " + encodedPassword);
	}

}
