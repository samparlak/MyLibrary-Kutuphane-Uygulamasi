import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kitap } from './kitap/kitap.model';


@Injectable()
export class KitapService {


  constructor(private httpClient:HttpClient) { }

  getKitaplar(){
     return this.httpClient.get<Kitap[]>("http://localhost:8080/api/kitaplar");
  }

}
