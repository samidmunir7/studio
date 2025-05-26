package com.studio.springboot_demo.service;

import com.studio.springboot_demo.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    public User getUser() {
        return new User("Sami Munir", "Full-stack Developer", "London");
    }   
}