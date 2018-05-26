package com.mylibrary.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Kitap")
public class Kitap {
	
	@Id
	private Long isbnNo;
	
	@Column(name="kitap_adi")
	private String kitapAdi;
	
	@Column(name="seri_adi")
	private String seriAdi;
	
	@Column(name="yazar_adi")
	private String yazarAdi;
	
	@Column(name="yayin_adi")
	private String yayinEviAdi;
	
	@Column(name="aciklama")
	private String aciklama;
	
	@Column(name="resim")
	private String resim;
	
	
	public Kitap() {}

	public Long getIsbnNo() {
		return isbnNo;
	}
	public void setIsbnNo(Long isbnNo) {
		this.isbnNo = isbnNo;
	}
	public String getKitapAdi() {
		return kitapAdi;
	}
	public void setKitapAdi(String kitapAdi) {
		this.kitapAdi = kitapAdi;
	}
	public String getSeriAdi() {
		return seriAdi;
	}
	public void setSeriAdi(String seriAdi) {
		this.seriAdi = seriAdi;
	}
	public String getYazarAdi() {
		return yazarAdi;
	}
	public void setYazarAdi(String yazarAdi) {
		this.yazarAdi = yazarAdi;
	}
	public String getYayinEviAdi() {
		return yayinEviAdi;
	}
	public void setYayinEviAdi(String yayinEviAdi) {
		this.yayinEviAdi = yayinEviAdi;
	}
	public String getAciklama() {
		return aciklama;
	}
	public void setAciklama(String aciklama) {
		this.aciklama = aciklama;
	}
	
	public String getResim() {
		return resim;
	}

	public void setResim(String resim) {
		this.resim = resim;
	}
	
	
	@Override
	public String toString() {
		return "Kitap [isbnNo=" + isbnNo + ", kitapAdi=" + kitapAdi + ", seriAdi=" + seriAdi + ", yazarAdi=" + yazarAdi
				+ ", yayinEviAdi=" + yayinEviAdi + ", aciklama=" + aciklama + "]";
	}
	
	
}
