package com.booking.service.client;

import com.booking.service.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class AuthServiceClientFallback implements AuthServiceClient {

    @Override
    public UserDto getUserById(Long id) {
        log.error("Fallback: Cannot get user with id: {}", id);
        UserDto fallbackUser = new UserDto();
        fallbackUser.setId(id);
        fallbackUser.setUsername("Unknown User");
        return fallbackUser;
    }

    @Override
    public UserDto getUserProfile(String token) {
        log.error("Fallback: Cannot get user profile");
        return new UserDto();
    }
}