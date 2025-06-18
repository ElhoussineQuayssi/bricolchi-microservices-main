package com.booking.service.client;

import com.booking.service.dto.TrackingResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(
        name = "suivie-service",
        fallback = TrackingServiceClientFallback.class
)
public interface TrackingServiceClient {

    @PostMapping("/api/tracking/create")
    TrackingResponse createTracking(@RequestParam("bookingId") Long bookingId,
                                    @RequestParam("clientId") Long clientId,
                                    @RequestParam("providerId") Long providerId);

    @GetMapping("/api/tracking/{bookingId}")
    TrackingResponse getTracking(@PathVariable("bookingId") Long bookingId);
}