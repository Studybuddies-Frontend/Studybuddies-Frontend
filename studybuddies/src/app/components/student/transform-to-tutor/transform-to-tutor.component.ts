import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../services/class.service";
import { NgForm } from "@angular/forms";
import { Class } from "../../../models/class";
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
import Swal from 'sweetalert2'
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-transform-to-tutor',
  templateUrl: './transform-to-tutor.component.html',
  styleUrls: ['./transform-to-tutor.component.css']
})
export class TransformToTutorComponent implements OnInit {

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
  }

  reloadPage(): void {
    window.location.reload()
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
        Swal.fire('Éxito', 'Se ha realizado el registro con éxito', 'success').then(function () {
          window.location.href = "./login";
          window.location.reload();
        })
      }
    }, err => {
      console.log(err)
      Swal.fire('Error', 'Se ha producido un error registrando el usuario', 'error')
      return;
    }
    );
  }


}
