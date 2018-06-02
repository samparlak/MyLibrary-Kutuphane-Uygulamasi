package com.mylibrary.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/* Hibernate Anotasyonları ile Sınıf verileri Database ile ilişkilendirildi. */

@Entity
@Table(name = "Yazar")
public class Yazar {

	@Id
	private Long isbnNo;

	@Column(name = "yazar_adi")
	private String yazarAdi;

	@Column(name = "kitap_adi")
	private String kitapAdi;

	@Column(name = "aciklama")
	private String aciklama;

	@Column(name = "resim")
	private String resim;

	public Yazar() {
	}

	public String getYazarAdi() {
		return yazarAdi;
	}

	public void setYazarAdi(String yazarAdi) {
		this.yazarAdi = yazarAdi;
	}

	public String getKitapAdi() {
		return kitapAdi;
	}

	public void setKitapAdi(String kitapAdi) {
		this.kitapAdi = kitapAdi;
	}

	public String getAciklama() {
		return aciklama;
	}

	public void setAciklama(String aciklama) {
		this.aciklama = aciklama;
	}

	public Long getIsbnNo() {
		return isbnNo;
	}

	public void setIsbnNo(Long isbnNo) {
		this.isbnNo = isbnNo;
	}

	public String getResim() {
		return resim;
	}

	public void setResim(String resim) {
		this.resim = resim;
	}

	@Override
	public String toString() {
		return "Yazar [yazarAdi=" + yazarAdi + ", kitapAdi=" + kitapAdi + ", aciklama=" + aciklama + "]";
	}

}
