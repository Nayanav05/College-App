package com.oct.college_directory.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oct.college_directory.entity.*;


		// TODO Auto-generated method stub
    	import java.util.Optional;
    	import org.springframework.data.jpa.repository.JpaRepository;

    	public interface UserRepo extends JpaRepository<Users, Long> {
    	    Optional<Users> findByUsername(String username);
    	}