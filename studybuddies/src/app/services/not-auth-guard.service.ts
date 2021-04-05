import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if(this.auth.isAuthenticated()) {
      this.router.navigate([''])
      return false;
    }
    return true;
  }
}
