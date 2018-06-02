import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthEmailPasswordService } from './auth-email-password.service';

/* CanActivate ile belirlediğimiz URI 'lara sınırlama getirebiliriz.
  Bu sayede Email parola ya da Sosyal Medya ile giriş yapılmadan sitedeki içeriklere ulaşılamaz.
  Kullanıcı ister sosyal medyadan olsun ister email parola ile olsun,başarılı giriş yaptığında Token dönecektir.
  Eğer token dönmezse return edilen this.authService.isAutheticated() ve 
  this.authService.isSocialAuthenticated() false dönecektir.
  Herhangi birinin true olması giriş için yeterlidir yani kullanıcı istediği giriş yöntemini seçebilir.
   */

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthEmailPasswordService) { }

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
  return this.authService.isAutheticated() || this.authService.isSocialAuthenticated() ;
}

}
