package com.oct.college_directory.controller;

import com.oct.college_directory.entity.Role;

public class LoginResponse {
    private String message;
    private Role role;

    public LoginResponse(String message, Role role2) {
        this.message = message;
        this.role = role2;
    }

    // Getters and Setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}

