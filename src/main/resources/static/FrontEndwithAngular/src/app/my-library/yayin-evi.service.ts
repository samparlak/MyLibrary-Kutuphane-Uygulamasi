import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YayinEvi } from './yayin-evi/yayin-evi.model';


@Injectable()
export class YayinEviService {

  constructor(private httpClient:HttpClient) { }

  getYayinEvleri(){
    return this.httpClient.get<YayinEvi[]>("http://localhost:8080/api/yayinevleri");
  }

}
