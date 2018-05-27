import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { KitapComponent } from './my-library/kitap/kitap.component';
import { YazarComponent } from './my-library/yazar/yazar.component';
import { YayinEviComponent } from './my-library/yayin-evi/yayin-evi.component';
import { KitapService } from './my-library/kitap.service';
import { YazarService } from './my-library/yazar.service';
import { YayinEviService } from './my-library/yayin-evi.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './my-library/home/home.component';
import { FiltrePipe } from './my-library/filtre.pipe';
import { KitapDetayComponent } from './my-library/kitap/kitap-detay/kitap-detay.component';
import { YazarDetayComponent } from './my-library/yazar/yazar-detay/yazar-detay.component';
import { YayinEviDetayComponent } from './my-library/yayin-evi/yayin-evi-detay/yayin-evi-detay.component';
import { KitapFormComponent } from './my-library/kitap/kitap-form/kitap-form.component';






@NgModule({
  declarations: [
    AppComponent,
    KitapComponent,
    YazarComponent,
    YayinEviComponent,
    HomeComponent,
    FiltrePipe,
    KitapDetayComponent,
    YazarDetayComponent,
    YayinEviDetayComponent,
    KitapFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [KitapService,YazarService,YayinEviService],
  bootstrap: [AppComponent]
})
export class AppModule { }
