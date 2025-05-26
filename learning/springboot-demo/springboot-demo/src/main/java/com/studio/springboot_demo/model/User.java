package com.studio.springboot_demo.model;

public class User {
    private String name;
    private String role;
    private String location;
    
    public User(String name, String role, String location) {
        this.name = name;
        this.role = role;
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    public String getLocation() {
        return location;
    }
}