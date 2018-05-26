package com.mylibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mylibrary.model.Kitap;

public interface KitapRepository extends JpaRepository<Kitap,Long> {

//	List<Kitap> findAll();
//	Kitap findByIsbnNo(Long isbnNo);
//	List<Kitap> findBySeriAdi(String seriAdi);
//	List<Kitap> findByYazarAdi(String yazarAdi);
//	List<Kitap> findByYayinEvi(String yayinEvi);
//	void createKitap(Kitap kitap);
//	void updateKitap(Kitap kitap);
//	void deleteKitap(Long isbnNo);
	
}
