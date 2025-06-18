package com.example.geoservice.client;

import com.example.geoservice.dto.AnnonceDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@FeignClient(
        name = "annonce-service",
        fallback = AnnonceServiceClientFallback.class
)
public interface AnnonceServiceClient {

    @GetMapping("/api/annonce")
    List<AnnonceDto> getAllAnnonces();
}