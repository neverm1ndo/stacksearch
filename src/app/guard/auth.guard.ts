import { Injectable } from '@angular/core';
import { OauthService } from '../oauth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
      private router: Router,
      private auth: OauthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.auth.isAuthenticated()) {
        return true;
      }
      console.log('YOU SHALL NOT PASS!');
      this.router.navigate(['/auth']);
      return false;
    }
}
