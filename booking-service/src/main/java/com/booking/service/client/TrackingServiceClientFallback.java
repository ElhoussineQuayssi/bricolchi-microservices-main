package com.booking.service.client;

import com.booking.service.dto.TrackingResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class TrackingServiceClientFallback implements TrackingServiceClient {

    @Override
    public TrackingResponse createTracking(Long bookingId, Long clientId, Long providerId) {
        log.error("Fallback: Cannot create tracking for booking: {}", bookingId);
        return null;
    }

    @Override
    public TrackingResponse getTracking(Long bookingId) {
        log.error("Fallback: Cannot get tracking for booking: {}", bookingId);
        return null;
    }
}