import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { User } from "../../models/user";
import { LoginService } from "../../services/login/login.service";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/internal/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private loginService: LoginService
  ) { }

  username = '';
  password = '';
  confirmPassword: '';
  nombre: '';
  apellidos: '';
  email: string = '';
  universidad: '';
  grado: '';
  descripcion: '';
  telefono: string = '';
  isLoggedIn = false;
  isLoginFailed = false;
  role = '';
  loginError = null;
  user: User = new User();
  logged = false;
  checked = false;

  ngOnInit(): void {
    if (this.tokenStorage.getUser()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
    }
    console.log(this.isLoggedIn)
  }

  login() {
    if (!this.username) {
      Swal.fire('Login', 'Debe indicar un nombre de usuario', 'error')
    }
    if (!this.password) {
      Swal.fire('Login', 'Debe indicar una contraseña', 'error')
    }

    this.authService.login(this.username, this.password).subscribe(async response => {
      this.tokenStorage.saveUser(response);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.role = response.role
      await this.router.navigate([''])
      this.reloadPage();
    }, err => {
      this.isLoginFailed = true;
      Swal.fire('Login', 'Credenciales incorrectas', 'error')
    }
    );
  }

  reloadPage(): void {
    window.location.reload()
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

  registerAlumno() {
    if (!this.username) {
      Swal.fire('Error', 'El nombre de usuario no es correcto', 'error')
      return;
    }
    if (!this.password) {
      Swal.fire('Error', 'La contraseña indicada no es correcta', 'error')
      return;
    }
    if (!this.confirmPassword) {
      Swal.fire('Error', 'La contraseña indicada no es correcta', 'error')
      return;
    }
    if (this.confirmPassword != this.password) {
      Swal.fire('Error', 'Las contraseñas deben coincidir', 'error')
      return;
    }
    if (!this.nombre) {
      Swal.fire('Error', 'Debe indicarse un nombre', 'error')
      return;
    }
    if (!this.apellidos) {
      Swal.fire('Error', 'Deben indicarse los apellidos', 'error')
      return;
    }
    if (!this.email) {
      Swal.fire('Error', 'Debe indicarse un email', 'error')
      return;
    }
    if (!this.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      Swal.fire('Error', 'Este email no es valido', 'error')
      return;
    }
    if (!this.universidad) {
      Swal.fire('Error', 'Debe indicarse una Universidad', 'error')
      return;
    }
    if (!this.grado) {
      Swal.fire('Error', 'Debe indicarse un grado', 'error')
      return;
    }

    this.authService.registerAlumno(this.username, this.password, this.confirmPassword, this.nombre, this.apellidos, this.email, this.universidad, this.grado).subscribe(async response => {
      /* this.tokenStorage.saveUser(response);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.role = response.role */
      console.log(response)
      if (response.result == 0) {
        Swal.fire('Error', response.mensaje, 'error')
      }
      if (response.result == 1) {
        this.router.navigate(['/login'])
        this.reloadPage();
        Swal.fire('Exito', 'Se ha realizado el registro con éxito', 'success') 
      }
    }, err => {
      console.log(err)
      Swal.fire('Error', 'Se ha producido un error registrando el usuario', 'error')
      return ;
    }
    );
  }

  registerTutor() {
    if (!this.username) {
      Swal.fire('Error', 'El nombre de usuario no es correcto', 'error')
      return;
    }
    if (!this.password) {
      Swal.fire('Error', 'La contraseña indicada no es correcta', 'error')
      return;
    }
    if (!this.confirmPassword) {
      Swal.fire('Error', 'La contraseña indicada no es correcta', 'error')
      return;
    }
    if (this.confirmPassword != this.password) {
      Swal.fire('Error', 'Las contraseñas deben coincidir', 'error')
      return;
    }
    if (!this.nombre) {
      Swal.fire('Error', 'Debe indicarse un nombre', 'error')
      return;
    }
    if (!this.apellidos) {
      Swal.fire('Error', 'Deben indicarse los apellidos', 'error')
      return;
    }
    if (!this.email) {
      Swal.fire('Error', 'Debe indicarse un email', 'error')
      return;
    }
    if (!this.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      Swal.fire('Error', 'Este email no es valido', 'error')
      return;
    }
    if (!this.universidad) {
      Swal.fire('Error', 'Debe indicarse una Universidad', 'error')
      return;
    }
    if (!this.grado) {
      Swal.fire('Error', 'Debe indicarse un grado', 'error')
      return;
    }
    if (!this.descripcion) {
      Swal.fire('Error', 'Debe indicarse una descripcion', 'error')
      return;
    }
    if (!this.checked) {
      Swal.fire('Error', 'Debe marcar la casilla', 'error')
      return;
    }

    this.authService.registerTutor(this.username, this.password, this.confirmPassword, this.nombre, this.apellidos, this.email, this.universidad, this.grado, this.descripcion,this.telefono).subscribe(async response => {
      /* this.tokenStorage.saveUser(response);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.role = response.role */
      console.log(response)
      if (response.result == 0) {
        Swal.fire('Error', response.mensaje, 'error')
      }
      if (response.result == 1) {
        this.router.navigate(['/login'])
        this.reloadPage();
        Swal.fire('Exito', 'Se ha realizado el registro con éxito', 'success') 
      }
    }, err => {
      console.log(err)
      Swal.fire('Error', 'Se ha producido un error registrando el usuario', 'error')
      return ;
    }
    );
  }


}
