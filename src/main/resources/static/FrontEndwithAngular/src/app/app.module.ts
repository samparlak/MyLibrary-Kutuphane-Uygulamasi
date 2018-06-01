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
import { SilmeComponent } from './my-library/home/silme/silme.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './my-library/auth-guard.service';
import { AuthEmailPasswordService } from './my-library/auth-email-password.service';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("212943032659422")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("514611328763-e35ecjtrg77ul7tt8fj20u57pn5vnmu5.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}



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
    SilmeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule
    
  ],
  providers: [KitapService,YazarService,YayinEviService,AuthEmailPasswordService,AuthGuardService,	{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
