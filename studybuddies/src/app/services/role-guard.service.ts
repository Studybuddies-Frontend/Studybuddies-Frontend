import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const user = window.sessionStorage.getItem('auth-user')
    if(!this.auth.isAuthenticated() ){
      this.router.navigate(['/login'])
      return false;
    } else if(this.auth.getRole() == 'admin') {
      return true;
    } else if(this.auth.getRole() !== expectedRole ) {
      this.router.navigate([''])
      return false;
    }
    return true;
  }
}
