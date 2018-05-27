import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Yazar } from "./yazar/yazar.model";

@Injectable()
export class YazarService {
  yazar: Yazar;

  constructor(private httpClient: HttpClient) {}

  getYazarlar() {
    return this.httpClient.get<Yazar[]>("http://localhost:8080/api/yazarlar");
  }

  silYazar(id: number) {
    return this.httpClient.delete<number>(
      "http://localhost:8080/api/yazarlar" + id
    );
  }

  düzenleYazar(yazar) {
    const headers=new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.put<Yazar>("http://localhost:8080/api/yazarlar",JSON.stringify(yazar),{
      headers:headers
    })
  }

setter(yazar){
  this.yazar=yazar;
}

getter(){
  return this.yazar;
}

}
