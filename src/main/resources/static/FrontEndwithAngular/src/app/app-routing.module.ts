import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { KitapComponent } from "./my-library/kitap/kitap.component";
import { YazarComponent } from "./my-library/yazar/yazar.component";
import { YayinEviComponent } from "./my-library/yayin-evi/yayin-evi.component";
import { HomeComponent } from "./my-library/home/home.component";
import { KitapDetayComponent } from "./my-library/kitap-detay/kitap-detay.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "kitaplar", component: KitapComponent },
  { path: "yazarlar", component: YazarComponent },
  { path: "yayinlar", component: YayinEviComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
