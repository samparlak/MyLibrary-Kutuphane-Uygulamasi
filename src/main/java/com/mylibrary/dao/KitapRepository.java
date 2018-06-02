package com.mylibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mylibrary.model.Kitap;

public interface KitapRepository extends JpaRepository<Kitap,Long> {

}
