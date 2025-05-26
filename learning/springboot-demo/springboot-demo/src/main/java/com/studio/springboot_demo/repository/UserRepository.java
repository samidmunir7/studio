package com.studio.springboot_demo.repository;

import com.studio.springboot_demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    // CRUD is automatically provided.
}