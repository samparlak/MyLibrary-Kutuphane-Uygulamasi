import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Kitap } from "../kitap.model";
import { KitapService } from "../../kitap.service";

@Component({
  selector: "app-kitap-form",
  templateUrl: "./kitap-form.component.html",
  styleUrls: ["./kitap-form.component.css"]
})
export class KitapFormComponent implements OnInit {
  private kitap: Kitap;

  constructor(private kitapService: KitapService, private router: Router) {}

  ngOnInit() {
    this.kitap = this.kitapService.getter();
  }

  /* kitap-form.component.html'den gelen form verilerine ait isbnNo verisi tanımlıysa
    Düzenlenen Form verileri kitap.service.ts 'deki düzenleKitap() metoduyla 
    REST servisleri ile Spring ile oluşturulan API mize gider ve database 'e kayıt olur. */
  onSave() {
    if (this.kitap.isbnNo !== undefined) {
      this.kitapService.düzenleKitap(this.kitap).subscribe(
        res => {
          this.router.navigate(["/"]);
          console.log("Düzenleme işlemi başarılı." + res);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
