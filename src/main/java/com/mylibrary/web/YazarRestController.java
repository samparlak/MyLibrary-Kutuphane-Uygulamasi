package com.mylibrary.web;

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

import com.mylibrary.dao.YazarRepository;
import com.mylibrary.model.Yazar;

/* JPA metotlarıyla databaseden veri çağırma,silme,oluşturma,düzenleme işlemleri yapılır.
	REST servisleri ile bu CRUD işlemleri ilişkilendirilir ve istemciler için ulaşılabilir hale getirilir.*/

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class YazarRestController {

	@Autowired
	private YazarRepository yazarRepository;
	
	@GetMapping("/yazarlar")
	public List<Yazar> getAll() {
		return yazarRepository.findAll();
	}
	
	@GetMapping("/yazarlar/{isbnNo}")
	public Optional<Yazar> getOne(@PathVariable Long isbnNo) {
		return yazarRepository.findById(isbnNo);
	}
	
	@PutMapping("/yazarlar")
	public Yazar createOne(@RequestBody Yazar yazar) {
		return yazarRepository.save(yazar);
	}
	
	@PostMapping("/yazarlar")
	public Yazar updateOne(@RequestBody Yazar yazar) {
		return yazarRepository.save(yazar);
	}
	
	@DeleteMapping("/yazarlar/{isbnNo}")
	public void deleteOne(@PathVariable Long isbnNo) {
		yazarRepository.deleteById(isbnNo);
	}
	
}
