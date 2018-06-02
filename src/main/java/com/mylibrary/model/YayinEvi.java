package com.mylibrary.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "YAYIN_EVI")
public class YayinEvi {

	@Id
	private Long isbnNo;

	@Column(name = "yayin_adi")
	private String yayinEviAdi;

	@Column(name = "kitap_adi")
	private String kitapAdi;

	@Column(name = "aciklama")
	private String aciklama;

	public YayinEvi() {
	}

	public Long getIsbnNo() {
		return isbnNo;
	}

	public void setIsbnNo(Long isbnNo) {
		this.isbnNo = isbnNo;
	}

	public String getYayinEviAdi() {
		return yayinEviAdi;
	}

	public void setYayinEviAdi(String yayinEviAdi) {
		this.yayinEviAdi = yayinEviAdi;
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

	@Override
	public String toString() {
		return "YayinEvi [yayinEviAdi=" + yayinEviAdi + ", kitapAdi=" + kitapAdi + ", aciklama=" + aciklama + "]";
	}

}
