package com.mylibrary.web;

import java.util.List;
import java.util.Optional;

import org.hamcrest.MatcherAssert;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.mylibrary.dao.YayinEviRepository;
import com.mylibrary.model.YayinEvi;



@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class YayinEviRestControllerTests {
	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private YayinEviRepository yayineviRepository;

	@Test
	public void testgetAll() throws Exception {
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("http://localhost:8080/api/yayinevleri");
		ResultActions resultActions = mockMvc.perform(requestBuilder);
		MvcResult mvcResult = resultActions.andReturn();

		// Belirtilen URI ile Bağlantı Testi
		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200));

		List<YayinEvi> yayinevleri = yayineviRepository.findAll();

		MatcherAssert.assertThat(yayinevleri.size(), Matchers.equalTo(17)); /* yayinevi sayısı 10 */
		MatcherAssert.assertThat(yayinevleri.get(0).getYayinEviAdi(), Matchers.equalTo("Türkiye İş Bankası Kültür Yayınları")); /* 1.yayinevi Adı */
		MatcherAssert.assertThat(yayinevleri.get(1).getYayinEviAdi(), Matchers.equalTo("Timaş Yayınları")); /* 2.yayinevi Adı */
		MatcherAssert.assertThat(yayinevleri.get(16).getYayinEviAdi(), Matchers.equalTo("İslamAraştırmaları Merkezi")); /* 17.yayinevi Adı */
	}

	@Test
	public void testgetOne() throws Exception {
		MockHttpServletRequestBuilder requestBuilder1 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yayinevleri/1");
		MvcResult mvcResult1 = mockMvc.perform(requestBuilder1).andReturn();
		MatcherAssert.assertThat(mvcResult1.getResponse().getStatus(), Matchers.equalTo(200)); /* Bağlantı Testi */
		
		MockHttpServletRequestBuilder requestBuilder2 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yayinevleri/10");
		MvcResult mvcResult2 = mockMvc.perform(requestBuilder2).andReturn();
		MatcherAssert.assertThat(mvcResult2.getResponse().getStatus(), Matchers.equalTo(200)); /* Bağlantı Testi */

		Optional<YayinEvi> yayinevi1 = yayineviRepository.findById(1L);
		Optional<YayinEvi> yayinevi10 = yayineviRepository.findById(10L);

		MatcherAssert.assertThat(yayinevi1.get().getYayinEviAdi(), Matchers.equalTo("Türkiye İş Bankası Kültür Yayınları")); /* 1.yayinevi Adı */
		MatcherAssert.assertThat(yayinevi10.get().getYayinEviAdi(), Matchers.equalTo("Bengü Yayınları")); /* 10.yayinevi Adı */

	}

	@Test
	public void testcreateOne() throws Exception {
		YayinEvi yayinevi = new YayinEvi();
		yayinevi.setIsbnNo(20L);
		yayinevi.setYayinEviAdi("Testyayinevi");
		yayineviRepository.save(yayinevi); /* Veritabanımıza yeni bir yayinevi eklendi */

		Optional<YayinEvi> yayinevi1 = yayineviRepository.findById(20L); /* Eklenen yayinevini geri çağırdık. */
		MatcherAssert.assertThat(yayinevi1.get().getYayinEviAdi(),
				Matchers.equalTo("Testyayinevi")); 
		/* Eklenen Yayineviyle Çağırılan Yayinevinin Karşılaştırması */
		
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yayinevleri/20");
		MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();
		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200));
		/* Eklenen Yeni Yayinevi için Oluşturulan URI ile Bağlantı Testi */
	}

	@Test
	public void testupdateOne() throws Exception {

		List<YayinEvi> yayinevleri = yayineviRepository.findAll();
		MatcherAssert.assertThat(yayinevleri.get(0).getYayinEviAdi(), Matchers.equalTo("Türkiye İş Bankası Kültür Yayınları")); /* 1.yayinevi Adı */
		MatcherAssert.assertThat(yayinevleri.get(1).getYayinEviAdi(), Matchers.equalTo("Timaş Yayınları")); /* 2.yayinevi Adı */

		yayinevleri.get(0).setYayinEviAdi("Testyayinevi1");
		yayineviRepository.save(yayinevleri.get(0)); /* 1.yayinevi Düzenlendi */
		
		yayinevleri.get(1).setYayinEviAdi("Testyayinevi2");
		yayineviRepository.save(yayinevleri.get(1)); /* 2.yayinevi Düzenlendi */

		MatcherAssert.assertThat(yayinevleri.get(0).getYayinEviAdi(),
				Matchers.equalTo("Testyayinevi1"));
		/* Düzenlenen 1.Yayineviyle Çağırılan 1.Yayinevi Karşılaştırması */
		
		MatcherAssert.assertThat(yayinevleri.get(1).getYayinEviAdi(),
				Matchers.equalTo("Testyayinevi2"));
		/* Düzenlenen 1.Yayineviyle Çağırılan 1.Yayinevi Karşılaştırması */
		

		MockHttpServletRequestBuilder requestBuilder1 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yayinevleri/1");
		MvcResult mvcResult1 = mockMvc.perform(requestBuilder1).andReturn();
		MatcherAssert.assertThat(mvcResult1.getResponse().getStatus(), Matchers.equalTo(200));
		/* Düzenlenen 1. yayinevia ait URI ile Bağlantı Testi */
		
		MockHttpServletRequestBuilder requestBuilder2 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yayinevleri/2");
		MvcResult mvcResult2 = mockMvc.perform(requestBuilder2).andReturn();
		MatcherAssert.assertThat(mvcResult2.getResponse().getStatus(), Matchers.equalTo(200));
		/* Düzenlenen 2. yayinevia ait URI ile Bağlantı Testi */
		
	}
		
		@Test
		public void testdeleteOne() throws Exception {
			
			Optional<YayinEvi> yayinevi1 = yayineviRepository.findById(1L);  /*yayinevi çağırıldı.*/
			MatcherAssert.assertThat(yayinevi1.isPresent(), Matchers.equalTo(true)); /*yayinevinin varlığı test edildi.*/
			yayineviRepository.deleteById(1L);	/*yayinevi silindi.*/
					
			Optional<YayinEvi> yayinevi2 = yayineviRepository.findById(1L);		 /*Silindikten sonra tekrar yayinevi çağırıldı.*/
			MatcherAssert.assertThat(yayinevi2.isPresent(), Matchers.equalTo(false));	 /*yayinevinin yokluğu test edildi.*/
			
		}

}
