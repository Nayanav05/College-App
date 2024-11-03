package com.oct.college_directory.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oct.college_directory.entity.*;
import com.oct.college_directory.repository.UserRepo;
import com.oct.college_directory.service.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
	private final UserService userService;
	 @Autowired
	    public UserController(UserService userService) {
	        this.userService = userService;
	    }
	
	@Autowired
    private UserRepo userRepository;

    @GetMapping
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    
	}
	@GetMapping("/{id}")
	public Optional<Users> findUser(@PathVariable("id") Long id){
		return userService.findById(id);
	}
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
	    System.out.println("Login attempt for user: " + loginRequest.getUsername());

	    Optional<Users> foundUser = userService.findByUsername(loginRequest.getUsername());
	    
	    if (foundUser.isPresent()) {
	        Users user = foundUser.get();
	        System.out.println("Found user: " + user.getUsername());

	        if (user.getPassword().equals(loginRequest.getPassword())) {
	            return ResponseEntity.ok(new LoginResponse("Login successful", user.getRole()));
	        } else {
	            System.out.println("Password mismatch for user: " + loginRequest.getUsername());
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	        }
	    } else {
	        System.out.println("User not found: " + loginRequest.getUsername());
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	    }
	}

	@PutMapping
	public Users updateUser(@RequestBody Users user) {
		return userService.updateUser(user);
	}
	@DeleteMapping
	public void deleteUser(@PathVariable("id") Long id) {
		userService.deleteUser(id);
		
	}
}
