package com.example.geoservice.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AnnonceDto {
    private Long id;
    private String titre;
    private String description;
    private String categorie;
    private Double prix;
    private String localisation;
    private Double latitude;
    private Double longitude;
    private Long userId;
    private LocalDateTime createdAt;
}