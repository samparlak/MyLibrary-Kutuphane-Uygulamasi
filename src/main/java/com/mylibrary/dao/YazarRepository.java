package com.mylibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mylibrary.model.Yazar;

public interface YazarRepository extends JpaRepository<Yazar,Long> {
	
}
