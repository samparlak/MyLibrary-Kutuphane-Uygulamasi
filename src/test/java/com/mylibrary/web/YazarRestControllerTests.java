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

import com.mylibrary.dao.YazarRepository;
import com.mylibrary.model.Yazar;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class YazarRestControllerTests {
	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private	YazarRepository yazarRepository;

	@Test
	public void testgetAll() throws Exception {
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("http://localhost:8080/api/yazarlar");
		ResultActions resultActions = mockMvc.perform(requestBuilder);
		MvcResult mvcResult = resultActions.andReturn();

		// Belirtilen URI ile Bağlantı Testi
		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200));

		List<Yazar> yazarlar = yazarRepository.findAll();

		MatcherAssert.assertThat(yazarlar.size(), Matchers.equalTo(10)); /* Yazar sayısı 10 */
		MatcherAssert.assertThat(yazarlar.get(0).getYazarAdi(), Matchers.equalTo("Agatha Christie")); /* 1.Yazar Adı */
		MatcherAssert.assertThat(yazarlar.get(1).getYazarAdi(), Matchers.equalTo("Halil İnalcık")); /* 2.Yazar Adı */
		MatcherAssert.assertThat(yazarlar.get(9).getYazarAdi(), Matchers.equalTo("Stefan Zweig")); /* 10.Yazar Adı */
	}

	@Test
	public void testgetOne() throws Exception {
		MockHttpServletRequestBuilder requestBuilder1 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yazarlar/1");
		MvcResult mvcResult1 = mockMvc.perform(requestBuilder1).andReturn();
		MatcherAssert.assertThat(mvcResult1.getResponse().getStatus(), Matchers.equalTo(200)); /* Bağlantı Testi */
		
		MockHttpServletRequestBuilder requestBuilder2 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yazarlar/10");
		MvcResult mvcResult2 = mockMvc.perform(requestBuilder2).andReturn();
		MatcherAssert.assertThat(mvcResult2.getResponse().getStatus(), Matchers.equalTo(200)); /* Bağlantı Testi */

		Optional<Yazar> Yazar1 = yazarRepository.findById(1L);
		Optional<Yazar> Yazar10 = yazarRepository.findById(10L);

		MatcherAssert.assertThat(Yazar1.get().getYazarAdi(), Matchers.equalTo("Agatha Christie")); /* 1.Yazar Adı */
		MatcherAssert.assertThat(Yazar10.get().getYazarAdi(), Matchers.equalTo("Stefan Zweig")); /* 10.Yazar Adı */

	}

	@Test
	public void testcreateOne() throws Exception {
		Yazar yazar = new Yazar();
		yazar.setIsbnNo(11L);
		yazar.setKitapAdi("TestKitap");
		yazar.setYazarAdi("TestYazar");
		yazarRepository.save(yazar); /* Veritabanımıza yeni bir Yazar eklendi */

		Optional<Yazar> yazar1 = yazarRepository.findById(11L); /* Eklenen Yazarı geri çağırdık. */
		MatcherAssert.assertThat(yazar1.get().getYazarAdi(),
				Matchers.equalTo("TestYazar")); 
		MatcherAssert.assertThat(yazar1.get().getKitapAdi(),
				Matchers.equalTo("TestKitap")); 
		/* Eklenen Yazarla Çağırılan Yazar Karşılaştırması */
		
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yazarlar/11");
		MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();
		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200));
		/* Eklenen Yeni Yazar için Oluşturulan URI ile Bağlantı Testi */
	}

	@Test
	public void testupdateOne() throws Exception {

		List<Yazar> yazarlar = yazarRepository.findAll();
		MatcherAssert.assertThat(yazarlar.get(0).getYazarAdi(), Matchers.equalTo("Agatha Christie")); /* 1.Yazar Adı */
		MatcherAssert.assertThat(yazarlar.get(1).getYazarAdi(), Matchers.equalTo("Halil İnalcık")); /* 2.Yazar Adı */

		yazarlar.get(0).setYazarAdi("TestYazar1");
		yazarlar.get(0).setKitapAdi("TestKitap1");
		yazarRepository.save(yazarlar.get(0)); /* 1.Yazar Düzenlendi */
		
		yazarlar.get(1).setYazarAdi("TestYazar2");
		yazarlar.get(1).setKitapAdi("TestKitap2");
		yazarRepository.save(yazarlar.get(1)); /* 2.Yazar Düzenlendi */

		MatcherAssert.assertThat(yazarlar.get(0).getYazarAdi(),
				Matchers.equalTo("TestYazar1"));
		MatcherAssert.assertThat(yazarlar.get(0).getKitapAdi(), Matchers.equalTo("TestKitap1"));
		/* Düzenlenen 1.Yazarla Çağırılan 1.Yazar Karşılaştırması */
		
		MatcherAssert.assertThat(yazarlar.get(1).getYazarAdi(),
				Matchers.equalTo("TestYazar2"));
		MatcherAssert.assertThat(yazarlar.get(1).getKitapAdi(), Matchers.equalTo("TestKitap2"));
		/* Düzenlenen 1.Yazarla Çağırılan 1.Yazar Karşılaştırması */
		

		MockHttpServletRequestBuilder requestBuilder1 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yazarlar/1");
		MvcResult mvcResult1 = mockMvc.perform(requestBuilder1).andReturn();
		MatcherAssert.assertThat(mvcResult1.getResponse().getStatus(), Matchers.equalTo(200));
		/* Düzenlenen 1. Yazara ait URI ile Bağlantı Testi */
		
		MockHttpServletRequestBuilder requestBuilder2 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/yazarlar/2");
		MvcResult mvcResult2 = mockMvc.perform(requestBuilder2).andReturn();
		MatcherAssert.assertThat(mvcResult2.getResponse().getStatus(), Matchers.equalTo(200));
		/* Düzenlenen 2. Yazara ait URI ile Bağlantı Testi */
		
	}
		
		@Test
		public void testdeleteOne() throws Exception {
			
			Optional<Yazar> yazar1 = yazarRepository.findById(1L);  /*Yazar çağırıldı.*/
			MatcherAssert.assertThat(yazar1.isPresent(), Matchers.equalTo(true)); /*Yazarın varlığı test edildi.*/
			yazarRepository.deleteById(1L);	/*Yazar silindi.*/
					
			Optional<Yazar> yazar2 = yazarRepository.findById(1L);		 /*Silindikten sonra tekrar Yazar çağırıldı.*/
			MatcherAssert.assertThat(yazar2.isPresent(), Matchers.equalTo(false));	 /*Yazarın yokluğu test edildi.*/
			
		}

}
