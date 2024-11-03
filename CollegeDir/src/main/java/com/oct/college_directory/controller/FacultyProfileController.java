package com.oct.college_directory.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oct.college_directory.entity.*;
import com.oct.college_directory.service.*;

@RestController
@RequestMapping("/facultyprofile")
public class FacultyProfileController {
    private final FacultyProfileService facultyProfileService;

    // Constructor injection of the StudentProfileService
    public FacultyProfileController(FacultyProfileService facultyProfileService) {
        this.facultyProfileService = facultyProfileService;
    }

    // Retrieve all student profiles
    @GetMapping
    public List<FacultyProfile> findAllFacultyProfile() {
        return facultyProfileService.findAllFacultyProfile();
    }

    // Retrieve a specific student profile by ID
    @GetMapping("/{id}")
    public Optional<FacultyProfile> findFacultyProfile(@PathVariable("id") Long id) {
        return facultyProfileService.findById(id);
    }

    // Create a new student profile
    @PostMapping
    public FacultyProfile saveFacultyProfile(@RequestBody FacultyProfile facultyProfile) {
        return facultyProfileService.saveFacultyProfile(facultyProfile);
    }

    // Update an existing student profile by ID
    @PutMapping("/{id}")
    public FacultyProfile updateFacultyProfile(@PathVariable("id") Long id, @RequestBody FacultyProfile facultyProfile) {
    	facultyProfile.setUser_id(id); // Ensure the ID is set for the update
        return facultyProfileService.updateFacultyProfile(facultyProfile);
    }

    // Delete a student profile by ID
    @DeleteMapping("/{id}") // Specify the ID in the path
    public void deleteFacultyProfile(@PathVariable("id") Long id) {
    	facultyProfileService.deleteFacultyProfile(id);
    }
}

