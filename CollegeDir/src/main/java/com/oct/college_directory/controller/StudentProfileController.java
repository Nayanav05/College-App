package com.oct.college_directory.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oct.college_directory.entity.StudentsProfile;
import com.oct.college_directory.entity.Users;
import com.oct.college_directory.service.StudentProfileService;

@RestController
@RequestMapping("/studentsprofile")
public class StudentProfileController {
    private final StudentProfileService studentProfileService;

    // Constructor injection of the StudentProfileService
    public StudentProfileController(StudentProfileService studentProfileService) {
        this.studentProfileService = studentProfileService;
    }

    // Retrieve all student profiles
    @GetMapping
    public List<StudentsProfile> findAllStudentsProfile() {
        return studentProfileService.findAllStudentsProfile();
    }

    // Retrieve a specific student profile by ID
    @GetMapping("/{id}")
    public Optional<StudentsProfile> findStudentsProfile(@PathVariable("id") Long id) {
        return studentProfileService.findById(id);
    }

    // Create a new student profile
    
    @PostMapping
    public ResponseEntity<StudentsProfile>saveStudentsProfile(@RequestBody StudentsProfile studentsProfile) {
        // Optionally add validation logic here
    	StudentsProfile savedStudentsProfile = studentProfileService.saveStudentsProfile(studentsProfile);
        return ResponseEntity.ok(savedStudentsProfile);
    }

    // Update an existing student profile by ID
    @PutMapping("/{id}")
    public StudentsProfile updateStudentsProfile(@PathVariable("id") Long id, @RequestBody StudentsProfile studentProfile) {
        studentProfile.setUserId(id); // Ensure the ID is set for the update
        return studentProfileService.updateStudentsProfile(studentProfile);
    }

    // Delete a student profile by ID
    @DeleteMapping("/{id}") // Specify the ID in the path
    public void deleteStudentsProfile(@PathVariable("id") Long id) {
        studentProfileService.deleteStudentsProfile(id);
    }
}
