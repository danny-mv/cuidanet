package com.cuidanet.app;

import org.springframework.boot.SpringApplication;

public class TestCuidaNetApplication {

	public static void main(String[] args) {
		SpringApplication.from(CuidaNetApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
