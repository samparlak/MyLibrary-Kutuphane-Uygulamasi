import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthEmailPasswordService } from './auth-email-password.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService:AuthEmailPasswordService) { }

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
  return this.authService.isAutheticated();
}

}
