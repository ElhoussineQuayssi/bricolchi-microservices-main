package com.booking.service.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class TrackingResponse {
    private Long id;
    private Long bookingId;
    private Long clientId;
    private Long providerId;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}