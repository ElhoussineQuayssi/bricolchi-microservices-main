package com.bricolchi.annonce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class AnnonceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnnonceApplication.class, args);
	}

}
