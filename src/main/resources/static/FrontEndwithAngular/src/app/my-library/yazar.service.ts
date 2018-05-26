import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Yazar } from './yazar/yazar.model';


@Injectable()
export class YazarService {

  constructor(private httpClient:HttpClient) { }

  getYazarlar(){
    return this.httpClient.get<Yazar[]>("http://localhost:8080/api/yazarlar");
  }

}
