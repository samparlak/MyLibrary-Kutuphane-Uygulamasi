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
import { SilmeComponent } from "./my-library/home/silme/silme.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuardService } from "./my-library/auth-guard.service";

/* Site için yönlendirmelerin ve sınırlamaların kontrol edilmesi */

const routes: Routes = [
  { path: "", component: HomeComponent ,canActivate:[AuthGuardService]},
  { path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  { path: "islemkitap",component:KitapFormComponent,canActivate:[AuthGuardService] },
  { path: "kitaplar", component: KitapComponent,canActivate:[AuthGuardService] },
  { path: "kitaplar/:id", component: KitapDetayComponent,canActivate:[AuthGuardService] },
  { path: "yazarlar", component: YazarComponent ,canActivate:[AuthGuardService] },
  { path:  "yazarlar/:id",component:YazarDetayComponent ,canActivate:[AuthGuardService]},
  { path: "yayinlar", component: YayinEviComponent ,canActivate:[AuthGuardService]},
  { path:  "yayinlar/:id",component:YayinEviDetayComponent,canActivate:[AuthGuardService]},
  {path:"silmebildirim",component:SilmeComponent,canActivate:[AuthGuardService]},
  
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
