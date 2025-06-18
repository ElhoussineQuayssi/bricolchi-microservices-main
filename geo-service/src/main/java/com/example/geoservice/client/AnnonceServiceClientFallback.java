package com.example.geoservice.client;

import com.example.geoservice.dto.AnnonceDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
public class AnnonceServiceClientFallback implements AnnonceServiceClient {

    @Override
    public List<AnnonceDto> getAllAnnonces() {
        log.error("Fallback: Cannot get annonces from annonce-service");
        return new ArrayList<>();
    }
}
