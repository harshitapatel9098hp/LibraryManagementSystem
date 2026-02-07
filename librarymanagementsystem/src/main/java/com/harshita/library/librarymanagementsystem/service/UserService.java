package com.harshita.library.librarymanagementsystem.service;
import com.harshita.library.librarymanagementsystem.model.User;
import com.harshita.library.librarymanagementsystem.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Register user
    public User register(User user) {
        return userRepository.save(user);
    }

    // Get logged-in user profile
    public User getProfile(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
