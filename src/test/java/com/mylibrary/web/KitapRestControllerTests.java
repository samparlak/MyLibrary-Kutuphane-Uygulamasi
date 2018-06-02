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

import com.mylibrary.dao.KitapRepository;
import com.mylibrary.model.Kitap;



@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class KitapRestControllerTests {
	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private KitapRepository kitapRepository;

	@Test
	public void testgetAll() throws Exception {
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("http://localhost:8080/api/kitaplar");
		ResultActions resultActions = mockMvc.perform(requestBuilder);
		MvcResult mvcResult = resultActions.andReturn();

		// Belirtilen URI ile Bağlantı Testi
		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200));

		List<Kitap> kitaplar = kitapRepository.findAll();

		MatcherAssert.assertThat(kitaplar.size(), Matchers.equalTo(27)); /* Kitap sayısı 27 */
		MatcherAssert.assertThat(kitaplar.get(0).getKitapAdi(), Matchers.equalTo("Engereğin Gözü")); /* 1.Kitap Adı */
		MatcherAssert.assertThat(kitaplar.get(0).getIsbnNo(), Matchers.equalTo(6050904222L)); /* 1.Kitap ISBN no */
		MatcherAssert.assertThat(kitaplar.get(0).getYazarAdi(),
				Matchers.equalTo("Zülfü Livaneli")); /* 1.Kitap Yazar Adı */
		MatcherAssert.assertThat(kitaplar.get(26).getKitapAdi(), Matchers.equalTo("Ahşap Konak")); /* 27.Kitap Adı */
		MatcherAssert.assertThat(kitaplar.get(26).getIsbnNo(), Matchers.equalTo(9758180899L)); /* 27.Kitap ISBN no */
		MatcherAssert.assertThat(kitaplar.get(26).getYazarAdi(),
				Matchers.equalTo("Necip Fazıl Kısakürek")); /* 27.Kitap Yazar Adı */
	}

	@Test
	public void testgetOne() throws Exception {
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders
				.get("http://localhost:8080/api/kitaplar/6050904222");
		MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();
		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200)); /* Bağlantı Testi */

		Optional<Kitap> kitap = kitapRepository.findById(6050904222L);

		MatcherAssert.assertThat(kitap.get().getKitapAdi(), Matchers.equalTo("Engereğin Gözü")); /* Kitap Adı */
		MatcherAssert.assertThat(kitap.get().getIsbnNo(), Matchers.equalTo(6050904222L)); /* Kitap ISBN no */
		MatcherAssert.assertThat(kitap.get().getYazarAdi(), Matchers.equalTo("Zülfü Livaneli")); /* Kitap Yazar Adı */

	}

	@Test
	public void testcreateOne() throws Exception {
		Kitap kitap = new Kitap();
		kitap.setIsbnNo(1111L);
		kitap.setKitapAdi("TestKitap");
		kitap.setYazarAdi("TestYazar");
		kitapRepository.save(kitap); /* Veritabanımıza yeni bir kitap eklendi */

		Optional<Kitap> kitap1 = kitapRepository.findById(1111L); /* Eklenen kitapı geri çağırdık. */
		MatcherAssert.assertThat(kitap1.get().getKitapAdi(),
				Matchers.equalTo("TestKitap")); /* Eklenen Kitapla Çağırılan Kitap Karşılaştırması */

		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders
				.get("http://localhost:8080/api/kitaplar/1111");
		MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();
		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200));
		/* Eklenen Yeni Kitap için Oluşturulan URI ile Bağlantı Testi */
	}

	@Test
	public void testupdateOne() throws Exception {

		List<Kitap> kitaplar = kitapRepository.findAll();
		MatcherAssert.assertThat(kitaplar.get(0).getKitapAdi(), Matchers.equalTo("Engereğin Gözü")); /* 1.Kitap Adı */
		MatcherAssert.assertThat(kitaplar.get(0).getIsbnNo(), Matchers.equalTo(6050904222L)); /* 1.Kitap ISBN no */
		MatcherAssert.assertThat(kitaplar.get(1).getKitapAdi(), Matchers.equalTo("Leylanın Evi")); /* 2.Kitap Adı */
		MatcherAssert.assertThat(kitaplar.get(1).getIsbnNo(), Matchers.equalTo(6050906486L)); /* 2.Kitap ISBN no */

		kitaplar.get(0).setKitapAdi("TestKitap1");
		kitaplar.get(0).setYazarAdi("TestYazar1");
		kitapRepository.save(kitaplar.get(0)); /* 1.Kitap Düzenlendi */
		
		kitaplar.get(1).setKitapAdi("TestKitap2");
		kitaplar.get(1).setYazarAdi("TestYazar2");
		kitapRepository.save(kitaplar.get(1)); /* 2.Kitap Düzenlendi */

		MatcherAssert.assertThat(kitaplar.get(0).getKitapAdi(),
				Matchers.equalTo("TestKitap1")); /* Düzenlenen 1.Kitapla Çağırılan 1.Kitap Karşılaştırması */
		MatcherAssert.assertThat(kitaplar.get(1).getKitapAdi(),
				Matchers.equalTo("TestKitap2")); /* Düzenlenen 1.Kitapla Çağırılan 1.Kitap Karşılaştırması */
		

		MockHttpServletRequestBuilder requestBuilder1 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/kitaplar/6050904222");
		MvcResult mvcResult1 = mockMvc.perform(requestBuilder1).andReturn();
		MatcherAssert.assertThat(mvcResult1.getResponse().getStatus(), Matchers.equalTo(200));
		/* Düzenlenen 1. Kitaba ait URI ile Bağlantı Testi */
		
		MockHttpServletRequestBuilder requestBuilder2 = MockMvcRequestBuilders
				.get("http://localhost:8080/api/kitaplar/6050906486");
		MvcResult mvcResult2 = mockMvc.perform(requestBuilder2).andReturn();
		MatcherAssert.assertThat(mvcResult2.getResponse().getStatus(), Matchers.equalTo(200));
		/* Düzenlenen 2. Kitaba ait URI ile Bağlantı Testi */
		
	}
		
		@Test
		public void testdeleteOne() throws Exception {
			
			Optional<Kitap> kitap1 = kitapRepository.findById(6050904222L);  /*6050904222 ISBN nolu kitap çağırıldı.*/
			MatcherAssert.assertThat(kitap1.isPresent(), Matchers.equalTo(true)); /*Kitabın varlığı test edildi.*/
			kitapRepository.deleteById(6050904222L);	/*6050904222 ISBN nolu kitap silindi.*/
					
			Optional<Kitap> kitap2 = kitapRepository.findById(6050904222L);		 /*Silindikten sonra kitap çağırıldı.*/
			MatcherAssert.assertThat(kitap2.isPresent(), Matchers.equalTo(false));	 /*Kitabın yokluğu test edildi.*/
			
		}

}
