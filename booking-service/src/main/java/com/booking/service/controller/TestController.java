package com.booking.service.controller;

import com.booking.service.client.AuthServiceClient;
import com.booking.service.client.TrackingServiceClient;
import com.booking.service.dto.UserDto;
import com.booking.service.dto.TrackingResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TestController {

    private final AuthServiceClient authServiceClient;
    private final TrackingServiceClient trackingServiceClient;

    @GetMapping("/auth/{userId}")
    public UserDto testAuthService(@PathVariable Long userId) {
        return authServiceClient.getUserById(userId);
    }

    @PostMapping("/tracking")
    public TrackingResponse testTrackingService(@RequestParam Long bookingId,
                                                @RequestParam Long clientId,
                                                @RequestParam Long providerId) {
        return trackingServiceClient.createTracking(bookingId, clientId, providerId);
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "Booking Service with Feign is running!";
    }
}