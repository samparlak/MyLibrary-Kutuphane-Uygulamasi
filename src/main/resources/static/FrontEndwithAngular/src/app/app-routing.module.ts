import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { KitapComponent } from "./my-library/kitap/kitap.component";
import { YazarComponent } from "./my-library/yazar/yazar.component";
import { YayinEviComponent } from "./my-library/yayin-evi/yayin-evi.component";
import { HomeComponent } from "./my-library/home/home.component";
import { KitapFormComponent } from "./my-library/kitap/kitap-form/kitap-form.component";
import { KitapDetayComponent } from "./my-library/kitap/kitap-detay/kitap-detay.component";
import { YazarDetayComponent } from "./my-library/yazar/yazar-detay/yazar-detay.component";
import { YayinEviDetayComponent } from "./my-library/yayin-evi/yayin-evi-detay/yayin-evi-detay.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "islemkitap",component:KitapFormComponent},
  { path: "kitaplar", component: KitapComponent},
  { path: "kitaplar/:id", component: KitapDetayComponent },
  { path: "yazarlar", component: YazarComponent },
  { path:  "yazarlar/:id",component:YazarDetayComponent},
  { path: "yayinlar", component: YayinEviComponent },
  { path:  "yayinlar/:id",component:YayinEviDetayComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
