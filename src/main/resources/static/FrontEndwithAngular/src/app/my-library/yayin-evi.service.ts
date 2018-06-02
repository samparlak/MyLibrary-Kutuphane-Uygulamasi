import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { YayinEvi } from './yayin-evi/yayin-evi.model';
import { Kitap } from './kitap/kitap.model';

/* Spring ile oluşturduğumuz API ye  REST servisleri ulaşmak için oluşturulan metotlar */

@Injectable()
export class YayinEviService {

  yayin:YayinEvi;

  constructor(private httpClient:HttpClient) { }

  getYayinEvleri(){
    return this.httpClient.get<YayinEvi[]>("http://localhost:8080/api/yayinevleri");
  }

  silYayin(id:number){
    return this.httpClient.delete<number>("http://localhost:8080/api/yayinevleri"+id);
  }

  düzenleKitap(kitap){
    const headers=new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.put<Kitap>("http://localhost:8080/api/yayinevleri",JSON.stringify(kitap),{
    headers:headers
    });
  }

  setter(yayin){
    this.yayin=yayin;
  }

  getter(){
    return this.yayin;
  }

}
