package com.mylibrary.web;

/* JPA metotlarıyla databaseden veri çağırma,silme,oluşturma,düzenleme işlemleri yapılır.
 	REST servisleri ile bu CRUD işlemleri ilişkilendirilir ve istemciler için ulaşılabilir hale getirilir.*/

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mylibrary.dao.KitapRepository;
import com.mylibrary.model.Kitap;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class KitapRestController {

	@Autowired
	private KitapRepository kitapRepository;
	
	@GetMapping("/kitaplar")
	public List<Kitap> getAll(){
		return kitapRepository.findAll();	
	}	
	
	@GetMapping("/kitaplar/{isbnNo}")
	public Optional<Kitap> getOne(@PathVariable Long isbnNo) {
		return kitapRepository.findById(isbnNo);
	}
	
	@PutMapping("/kitaplar")
	public Kitap createOne(@RequestBody Kitap kitap) {
		return kitapRepository.save(kitap);
	}
	
	@PostMapping("/kitaplar")
	public Kitap updateOne(@RequestBody Kitap kitap) {
		return kitapRepository.save(kitap);
	}

	@DeleteMapping("/kitaplar/{isbnNo}")
	public void deleteOne(@PathVariable Long isbnNo) {
		kitapRepository.deleteById(isbnNo);
	}

}
