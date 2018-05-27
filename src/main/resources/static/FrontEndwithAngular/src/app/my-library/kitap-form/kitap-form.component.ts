import { Component, OnInit } from "@angular/core";
import { Kitap } from "../kitap/kitap.model";
import { KitapService } from "../kitap.service";
import { Router } from "@angular/router";

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
