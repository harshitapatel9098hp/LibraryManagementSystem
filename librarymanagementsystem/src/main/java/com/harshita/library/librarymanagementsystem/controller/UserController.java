package com.harshita.library.librarymanagementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.harshita.library.librarymanagementsystem.model.User;
import com.harshita.library.librarymanagementsystem.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<User> profile(Authentication auth) {
        return ResponseEntity.ok(
            userService.getProfile(auth.getName())
        );
    }
}
