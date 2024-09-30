package com.backend.cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**")
                .allowedOrigins(
                        "https://controle-de-despesas-h7z5.onrender.com",
                        "http://localhost:5173",
                        "https://controle-de-despesas-umber.vercel.app")
                .allowedMethods("GET", "POST", "DELETE", "PUT");
    }
}
