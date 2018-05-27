import { Component, OnInit } from "@angular/core";
import { Kitap } from "../kitap/kitap.model";
import { KitapService } from "../kitap.service";
import { YazarService } from "../yazar.service";
import { YayinEviService } from "../yayin-evi.service";
import { Yazar } from "../yazar/yazar.model";
import { YayinEvi } from "../yayin-evi/yayin-evi.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private kitaplar: Kitap[] = [];
  private yazarlar: Yazar[] = [];
  private yayinEvleri: YayinEvi[] = [];

  i:number;

  getKitap(kitap){
    this.i=this.kitaplar.indexOf(kitap);
    this.router.navigate(['/kitaplar/'+this.i]);
  }

  getYazar(yazar){
    this.i=this.yazarlar.indexOf(yazar);
    this.router.navigate(['/yazarlar/'+this.i]);
  }

  getYayin(yayin){
    this.i=this.yayinEvleri.indexOf(yayin);
    this.router.navigate(['/yayinlar/'+this.i]);
  }

  filtered = "";
  ara="Filtreyi kullanarak Kitap,Yazar veya Yayınevi arayın";

  filtreKitap: boolean = true;
  filtreYazar: boolean = false;
  filtreYayin: boolean = false;

  filtreleKitaplar() {
    this.filtreKitap = false;
    this.filtreYayin = false;
    this.filtreYazar = false;
    this.ara="Kitap Ara"
    return (this.filtreKitap = true);
  }

  filtreleYazarlar() {
    this.filtreKitap = false;
    this.filtreYayin = false;
    this.filtreYazar = false;
    this.ara="Yazar Ara"
    return (this.filtreYazar = true);
  }

  filtreleYayinlar() {
    this.filtreKitap = false;
    this.filtreYayin = false;
    this.filtreYazar = false;
    this.ara="Yayınevi Ara"
    return (this.filtreYayin = true);
  }

  constructor(
    private kitapService: KitapService,
    private yazarService: YazarService,
    private yayinService: YayinEviService,
    private router:Router
  ) {}

  ngOnInit() {
    this.kitapService.getKitaplar().subscribe(
      res => {
        this.kitaplar = res;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );

    this.yazarService.getYazarlar().subscribe(
      res => {
        this.yazarlar = res;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );

    this.yayinService.getYayinEvleri().subscribe(
      res => {
        this.yayinEvleri = res;
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteKitap(kitap){
    this.kitapService.silKitap(kitap.isbnNo).subscribe(()=>{
      this.kitaplar.splice(this.kitaplar.indexOf(kitap),1);
      this.router.navigate(['bildirim']);
          
      console.log("Silme İşlemi gerçekleşti");
    }),
    (error)=>{
      console.log(error);
    }
  }

  updateKitap(kitap){
    this.kitapService.setter(kitap);
    this.router.navigate(['islemkitap']);
  }

}
