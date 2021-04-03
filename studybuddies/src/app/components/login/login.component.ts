import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) 
  {}

  username = '';
  password = '';
  isLoggedIn = false;
  isLoginFailed = false;
  role = '';

  ngOnInit(): void {
    if(this.tokenStorage.getUser()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
    }
    console.log(this.isLoggedIn)
  }

  login(){
    if(!this.username) {
      Swal.fire('Login', 'El nombre de usuario no es correcto', 'error')
    }
    if(!this.password) {
      Swal.fire('Login', 'La contraseña indicada no es correcta', 'error')
    }

    this.authService.login(this.username, this.password).subscribe(response => {
      this.tokenStorage.saveUser(response);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.role = response.role
      this.router.navigate(['/'])
      this.reloadPage();
    }, err => {
      this.isLoginFailed = true;
      Swal.fire('Login', 'Credenciales incorrectas', 'error')}
    );
  }

  reloadPage(): void {
    window.location.reload()
  }

}
