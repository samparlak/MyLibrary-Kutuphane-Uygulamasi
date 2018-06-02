//package com.mylibrary.web;
//
//
//
//import java.util.List;
//import java.util.Optional;
//
//import org.hamcrest.MatcherAssert;
//import org.hamcrest.Matchers;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.ResultActions;
//import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//
//import com.mylibrary.dao.YazarRepository;
//import com.mylibrary.model.Yazar;
//
//
//
//
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureMockMvc
//public class YazarRestControllerTests {
//	@Autowired
//	private MockMvc mockMvc;
//
//	@Autowired
//	private	YazarRepository yazarRepository;
//
//	@Test
//	public void testgetAll() throws Exception {
//		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("http://localhost:8080/api/yazarlar");
//		ResultActions resultActions = mockMvc.perform(requestBuilder);
//		MvcResult mvcResult = resultActions.andReturn();
//
//		// Belirtilen URI ile Bağlantı Testi
//		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200));
//
//		List<Yazar> yazarlar = yazarRepository.findAll();
//
//		MatcherAssert.assertThat(yazarlar.size(), Matchers.equalTo(27)); /* Yazar sayısı 27 */
//		MatcherAssert.assertThat(yazarlar.get(0).getYazarAdi(), Matchers.equalTo("Engereğin Gözü")); /* 1.Yazar Adı */
//		MatcherAssert.assertThat(yazarlar.get(0).getIsbnNo(), Matchers.equalTo(6050904222L)); /* 1.Yazar ISBN no */
//		MatcherAssert.assertThat(yazarlar.get(0).getYazarAdi(),
//				Matchers.equalTo("Zülfü Livaneli")); /* 1.Yazar Yazar Adı */
//		MatcherAssert.assertThat(yazarlar.get(26).getYazarAdi(), Matchers.equalTo("Ahşap Konak")); /* 27.Yazar Adı */
//		MatcherAssert.assertThat(yazarlar.get(26).getIsbnNo(), Matchers.equalTo(9758180899L)); /* 27.Yazar ISBN no */
//		MatcherAssert.assertThat(yazarlar.get(26).getYazarAdi(),
//				Matchers.equalTo("Necip Fazıl Kısakürek")); /* 27.Yazar Yazar Adı */
//	}
//
//	@Test
//	public void testgetOne() throws Exception {
//		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders
//				.get("http://localhost:8080/api/yazarlar/6050904222");
//		MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();
//		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200)); /* Bağlantı Testi */
//
//		Optional<Yazar> Yazar = yazarRepository.findById(6050904222L);
//
//		MatcherAssert.assertThat(Yazar.get().getYazarAdi(), Matchers.equalTo("Engereğin Gözü")); /* Yazar Adı */
//		MatcherAssert.assertThat(Yazar.get().getIsbnNo(), Matchers.equalTo(6050904222L)); /* Yazar ISBN no */
//		MatcherAssert.assertThat(Yazar.get().getYazarAdi(), Matchers.equalTo("Zülfü Livaneli")); /* Yazar Yazar Adı */
//
//	}
//
//	@Test
//	public void testcreateOne() throws Exception {
//		Yazar Yazar = new Yazar();
//		Yazar.setIsbnNo(1111L);
//		Yazar.setYazarAdi("TestYazar");
//		Yazar.setYazarAdi("TestYazar");
//		YazarRepository.save(Yazar); /* Veritabanımıza yeni bir Yazar eklendi */
//
//		Optional<Yazar> Yazar1 = YazarRepository.findById(1111L); /* Eklenen Yazarı geri çağırdık. */
//		MatcherAssert.assertThat(Yazar1.get().getYazarAdi(),
//				Matchers.equalTo("TestYazar")); /* Eklenen Yazarla Çağırılan Yazar Karşılaştırması */
//
//		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders
//				.get("http://localhost:8080/api/yazarlar/1111");
//		MvcResult mvcResult = mockMvc.perform(requestBuilder).andReturn();
//		MatcherAssert.assertThat(mvcResult.getResponse().getStatus(), Matchers.equalTo(200));
//		/* Eklenen Yeni Yazar için Oluşturulan URI ile Bağlantı Testi */
//	}
//
//	@Test
//	public void testupdateOne() throws Exception {
//
//		List<Yazar> yazarlar = YazarRepository.findAll();
//		MatcherAssert.assertThat(yazarlar.get(0).getYazarAdi(), Matchers.equalTo("Engereğin Gözü")); /* 1.Yazar Adı */
//		MatcherAssert.assertThat(yazarlar.get(0).getIsbnNo(), Matchers.equalTo(6050904222L)); /* 1.Yazar ISBN no */
//		MatcherAssert.assertThat(yazarlar.get(1).getYazarAdi(), Matchers.equalTo("Leylanın Evi")); /* 2.Yazar Adı */
//		MatcherAssert.assertThat(yazarlar.get(1).getIsbnNo(), Matchers.equalTo(6050906486L)); /* 2.Yazar ISBN no */
//
//		yazarlar.get(0).setYazarAdi("TestYazar1");
//		yazarlar.get(0).setYazarAdi("TestYazar1");
//		YazarRepository.save(yazarlar.get(0)); /* 1.Yazar Düzenlendi */
//		
//		yazarlar.get(1).setYazarAdi("TestYazar2");
//		yazarlar.get(1).setYazarAdi("TestYazar2");
//		YazarRepository.save(yazarlar.get(1)); /* 2.Yazar Düzenlendi */
//
//		MatcherAssert.assertThat(yazarlar.get(0).getYazarAdi(),
//				Matchers.equalTo("TestYazar1")); /* Düzenlenen 1.Yazarla Çağırılan 1.Yazar Karşılaştırması */
//		MatcherAssert.assertThat(yazarlar.get(1).getYazarAdi(),
//				Matchers.equalTo("TestYazar2")); /* Düzenlenen 1.Yazarla Çağırılan 1.Yazar Karşılaştırması */
//		
//
//		MockHttpServletRequestBuilder requestBuilder1 = MockMvcRequestBuilders
//				.get("http://localhost:8080/api/yazarlar/6050904222");
//		MvcResult mvcResult1 = mockMvc.perform(requestBuilder1).andReturn();
//		MatcherAssert.assertThat(mvcResult1.getResponse().getStatus(), Matchers.equalTo(200));
//		/* Düzenlenen 1. Kitaba ait URI ile Bağlantı Testi */
//		
//		MockHttpServletRequestBuilder requestBuilder2 = MockMvcRequestBuilders
//				.get("http://localhost:8080/api/yazarlar/6050906486");
//		MvcResult mvcResult2 = mockMvc.perform(requestBuilder2).andReturn();
//		MatcherAssert.assertThat(mvcResult2.getResponse().getStatus(), Matchers.equalTo(200));
//		/* Düzenlenen 2. Kitaba ait URI ile Bağlantı Testi */
//		
//	}
//		
//		@Test
//		public void testdeleteOne() throws Exception {
//			
//			Optional<Yazar> Yazar1 = YazarRepository.findById(6050904222L);  /*6050904222 ISBN nolu Yazar çağırıldı.*/
//			MatcherAssert.assertThat(Yazar1.isPresent(), Matchers.equalTo(true)); /*Kitabın varlığı test edildi.*/
//			YazarRepository.deleteById(6050904222L);	/*6050904222 ISBN nolu Yazar silindi.*/
//					
//			Optional<Yazar> Yazar2 = YazarRepository.findById(6050904222L);		 /*Silindikten sonra Yazar çağırıldı.*/
//			MatcherAssert.assertThat(Yazar2.isPresent(), Matchers.equalTo(false));	 /*Kitabın yokluğu test edildi.*/
//			
//		}
//
//}
