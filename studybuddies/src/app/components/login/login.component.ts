import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { LoginService } from "../../services/login/login.service";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loginError = null;
  logged: boolean;

  constructor(private loginService: LoginService, public router: Router, private cookieService: CookieService, public translate:TranslateService) { }

  ngOnInit() {
    if (this.cookieService.get('auth_token') != "") {
      this.logged = true;
      this.loginService.getPrincipal()
        .then (user => {
          if(user.tutor == true)
            this.router.navigate(['/tutor']);
          else
            this.router.navigate(['/student']);
        });
    } else
      this.logged = false;
  }

  log_in(): void {
    this.loginError = null;
    
    this.loginService.storeToken(this.user)
      .then(res => {
        this.loginService.eventEmitter.subscribe(principal => {
          this.logged = true;

          if (principal.tutor == true)
            this.router.navigate(['/tutor']);
          else 
            this.router.navigate(['/student']);
        });
      }).catch(error => {
        if (error.status == 401)
          this.loginError = error.status;
      });
  }


}
