package com.booking.service.dto;

import lombok.Data;

@Data
public class TrackingCreateRequest {
    private Long bookingId;
    private Long clientId;
    private Long providerId;
}

