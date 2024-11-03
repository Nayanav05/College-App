package com.oct.college_directory.entity;

import java.util.*;

import jakarta.persistence.*;

@Entity
@Table(name = "studentsprofile")
public class StudentsProfile {
    @Id
    private Long user_id; // Will be mapped from Users entity due to @MapsId

    @Column(name = "photo")
    private String photo;

    @Column(name = "year")
    private String year;
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Enrollment> enrollments = new HashSet<>();
    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id", referencedColumnName = "id") // Links to 'id' in Users table
    private Users user;

    @ManyToOne
    @JoinColumn(name = "department_id", referencedColumnName = "id") // Links to 'id' in Department table
    private Department department;

    public StudentsProfile() {
        super();
    }

    public StudentsProfile(String photo, String year, Users user, Department department) {
        super();
        this.photo = photo;
        this.year = year;
        this.user = user;
        this.department = department;
    }

    public Long getUserId() {
        return user_id;
    }
    public void setUserId(Long userId) {
        this.user_id=userId;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
