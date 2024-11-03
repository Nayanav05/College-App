package com.oct.college_directory.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.oct.college_directory.entity.StudentsProfile;
import com.oct.college_directory.repository.StudentProfileRepo;

@Service
public class StudentProfileService {
    private final StudentProfileRepo studentProfileRepo;

    public StudentProfileService(StudentProfileRepo studentProfileRepo) {
        this.studentProfileRepo = studentProfileRepo;
    }

    public List<StudentsProfile> findAllStudentsProfile() {
        return studentProfileRepo.findAll();
    }

    public Optional<StudentsProfile> findById(Long id) {
        return studentProfileRepo.findById(id);
    }

    public StudentsProfile saveStudentsProfile(StudentsProfile studentProfile) {
        return studentProfileRepo.save(studentProfile);
    }

    public StudentsProfile updateStudentsProfile(StudentsProfile studentProfile) {
        // Ensure the profile has a userId set
        if (!studentProfileRepo.existsById(studentProfile.getUserId())) {
            throw new RuntimeException("Student profile not found with id: " + studentProfile.getUserId());
        }
        return studentProfileRepo.save(studentProfile);
    }

    public void deleteStudentsProfile(Long id) {
        studentProfileRepo.deleteById(id);
    }
}
