import { Component, OnInit } from '@angular/core';
import { RoomService } from "../../../services/class.service";
import { NgForm } from "@angular/forms";
import { Class } from "../../../models/class";
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
import Swal from 'sweetalert2'
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';



@Component({
  selector: 'app-transform-to-tutor',
  templateUrl: './transform-to-tutor.component.html',
  styleUrls: ['./transform-to-tutor.component.css']
})
export class TransformToTutorComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private loginService: LoginService,
    private appComponent: AppComponent
  ) { }


  descripcion: '';
  telefono: string = '';
  checked = false;

  ngOnInit(): void {
  }

  reloadPage(): void {
    window.location.reload()
  }

  upgradeTutor(form: NgForm) {
    if (!this.descripcion) {
      Swal.fire('Error', 'Debe indicarse una descripcion', 'error')
      return;
    }
    if (!this.checked) {
      Swal.fire('Error', 'Debe marcar la casilla', 'error')
      return;
    }
    if (!this.telefono.match("[0-9]{9}") && !(this.telefono == '')) {
      Swal.fire('Error', 'El teléfono debe contener 9 dígitos', 'error')
      return;
    }

    this.userService.upgradeTutor(this.descripcion, this.telefono, this.authService.getId()).subscribe(async response => {
      Swal.fire('Éxito', 'Se ha cambiado tu rol con éxito', 'success')
    }, err => {
      console.log(err)
      Swal.fire('Error', 'Se ha producido un error cambiando el rol a tutor', 'error')
      return;
    }
    );
    this.tokenStorage.signOut();
    this.appComponent.logout();
    this.router.navigateByUrl("/login");
  }
}
