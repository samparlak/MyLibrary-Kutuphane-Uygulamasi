import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Kitap } from './kitap/kitap.model';


@Injectable()
export class KitapService {

  kitap:Kitap;

  constructor(private httpClient:HttpClient) { }

  getKitaplar(){
     return this.httpClient.get<Kitap[]>("http://localhost:8080/api/kitaplar");
  }

  silKitap(id:number){
    return this.httpClient.delete<number>("http://localhost:8080/api/kitaplar/"+id);
  }
  
  düzenleKitap(kitap){
    const headers=new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.put<Kitap>("http://localhost:8080/api/kitaplar",JSON.stringify(kitap),{
      headers:headers
    });
    
  }
  
    setter(kitap){
      this.kitap=kitap;
    }
    getter(){
      return this.kitap;
    }

}
