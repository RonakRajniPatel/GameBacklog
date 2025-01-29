package com.ronakrajnipatel.game_backlog.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        return http
                .authorizeExchange() // Start defining authorization rules
                .pathMatchers("/h2-console/**").permitAll()  // Allow H2 Console access
                .anyExchange().permitAll() // Allow all requests
                .and() // Go back to the ServerHttpSecurity context
                .csrf().disable() // Disable CSRF for simplicity
                .build(); // Build the SecurityWebFilterChain
    }
}