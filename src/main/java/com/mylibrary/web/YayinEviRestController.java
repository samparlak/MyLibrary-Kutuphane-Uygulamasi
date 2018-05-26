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

import com.mylibrary.dao.YayinEviRepository;
import com.mylibrary.model.YayinEvi;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class YayinEviRestController {

	@Autowired
	private YayinEviRepository yayinEviRepository;
	
	@GetMapping("/yayinevleri")
	public List<YayinEvi> getAll() {
		return yayinEviRepository.findAll();
	}
	
	@GetMapping("/yayinevleri/{isbn_no}")
	public Optional<YayinEvi> getOne(@PathVariable Long isbn_no) {
		return yayinEviRepository.findById(isbn_no);
	}
	
	@PutMapping("/yayinevleri")
	public YayinEvi createOne(@RequestBody YayinEvi yayinEvi) {
		return yayinEviRepository.save(yayinEvi);	
	}
	
	@PostMapping("/yayinevleri")
	public  YayinEvi updateOne(@RequestBody YayinEvi yayinEvi) {
		return yayinEviRepository.save(yayinEvi);	
	}
	
	@DeleteMapping("/yayinEvleri/{isbn_no}")
	public void deleteOne(@PathVariable Long isbn_no) {
		yayinEviRepository.deleteById(isbn_no);
	}
	
}
