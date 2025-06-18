package com.example.geoservice.service;

import com.example.geoservice.client.AnnonceServiceClient;
import com.example.geoservice.dto.AnnonceDto;
import com.example.geoservice.dto.AnnoncePageDto;
import com.example.geoservice.model.GeoResponse;
import com.example.geoservice.util.HaversineUtil;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Slf4j
public class GeoService {

    @Value("${opencage.api.key}")
    private String apiKey;

    @Value("${opencage.api.url}")
    private String apiUrl;

    @Value("${annonce.service.url}")
    private String annonceServiceUrl;

    @Autowired
    private AnnonceServiceClient annonceServiceClient;

    private final RestTemplate restTemplate = new RestTemplate();

    public GeoResponse geocode(String address) {
        try {
            String url = UriComponentsBuilder.fromHttpUrl(apiUrl)
                    .queryParam("q", address)
                    .queryParam("key", apiKey)
                    .queryParam("limit", 1)
                    .toUriString();

            String response = restTemplate.getForObject(url, String.class);
            JSONObject json = new JSONObject(response);

            if (json.getJSONArray("results").length() > 0) {
                JSONObject geometry = json.getJSONArray("results")
                        .getJSONObject(0)
                        .getJSONObject("geometry");

                return new GeoResponse(geometry.getDouble("lat"), geometry.getDouble("lng"));
            }
        } catch (Exception e) {
            log.error("Geocoding failed for address: {}", address, e);
        }

        return new GeoResponse(0.0, 0.0);
    }

    public List<AnnonceDto> getNearbyAnnonces(double lat, double lon, double radiusKm) {
        System.out.println("Annonce Service URL = " + annonceServiceUrl);

        try {
            // Essayer d'abord avec le Feign Client
            List<AnnonceDto> annonces = annonceServiceClient.getAllAnnonces();

            return annonces.stream()
                    .filter(a -> a.getLatitude() != null && a.getLongitude() != null)
                    .filter(a -> HaversineUtil.calculate(lat, lon, a.getLatitude(), a.getLongitude()) <= radiusKm)
                    .collect(Collectors.toList());

        } catch (Exception feignException) {
            log.warn("Feign client failed, falling back to RestTemplate: {}", feignException.getMessage());

            // Fallback avec RestTemplate (code original)
            String url = annonceServiceUrl + "/api/annonce";
            System.out.println("==> Calling Annonce Service at: " + url);

            try {
                ResponseEntity<AnnoncePageDto> response = restTemplate.getForEntity(url, AnnoncePageDto.class);
                List<AnnonceDto> annonces = response.getBody() != null ? response.getBody().getContent() : List.of();

                return annonces.stream()
                        .filter(a -> a.getLatitude() != null && a.getLongitude() != null)
                        .filter(a -> HaversineUtil.calculate(lat, lon, a.getLatitude(), a.getLongitude()) <= radiusKm)
                        .collect(Collectors.toList());

            } catch (Exception e) {
                System.err.println("Erreur appel AnnonceService: " + e.getMessage());
                log.error("Error getting nearby annonces", e);
                return List.of();
            }
        }
    }
}