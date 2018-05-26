import { Component, OnInit } from "@angular/core";
import { Kitap } from "../kitap/kitap.model";
import { KitapService } from "../kitap.service";
import { YazarService } from "../yazar.service";
import { YayinEviService } from "../yayin-evi.service";
import { Yazar } from "../yazar/yazar.model";
import { YayinEvi } from "../yayin-evi/yayin-evi.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private kitaplar: Kitap[] = [];
  private yazarlar: Yazar[] = [];
  private yayinEvleri: YayinEvi[] = [];

  filtered = "";

  filtreKitap: boolean = true;
  filtreYazar: boolean = false;
  filtreYayin: boolean = false;

  filtreleKitaplar() {
    this.filtreKitap = false;
    this.filtreYayin = false;
    this.filtreYazar = false;
    return (this.filtreKitap = true);
  }

  filtreleYazarlar() {
    this.filtreKitap = false;
    this.filtreYayin = false;
    this.filtreYazar = false;
    return (this.filtreYazar = true);
  }

  filtreleYayinlar() {
    this.filtreKitap = false;
    this.filtreYayin = false;
    this.filtreYazar = false;
    return (this.filtreYayin = true);
  }

  constructor(
    private kitapService: KitapService,
    private yazarService: YazarService,
    private yayinService: YayinEviService
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
}
