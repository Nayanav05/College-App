package com.oct.college_directory.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Enrollment")
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false, referencedColumnName = "user_id")
    private StudentsProfile student;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false, referencedColumnName = "id")
    private Course course;

    public Enrollment() {
    }

    public Enrollment(StudentsProfile student, Course course) {
        this.student = student;
        this.course = course;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public StudentsProfile getStudent() {
        return student;
    }

    public void setStudent(StudentsProfile student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
