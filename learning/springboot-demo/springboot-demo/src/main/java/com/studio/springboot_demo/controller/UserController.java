package com.studio.springboot_demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {
    @GetMapping("/user")
    public Map<String, String> getUser() {
        return Map.of(
            "name", "Sami Munir",
            "role", "Developer",
            "location", "USA"
        );
    }   
}