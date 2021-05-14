import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from "src/app/services/auth.service";
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  guid!: number;
  actualUser!: any;
  actualAsignaturas: any[]= [];
  puntos: number = 0;
  rol!: string;


  constructor(
    private route: ActivatedRoute,
    public userService: UserService,
    public auth: AuthService,
    public tokenStorage: TokenStorageService) { }

    username = '';
    nombre: '';
    apellidos: '';
    email: string = '';
    universidad: '';
    grado: '';
    descripcion: '';
    telefono:'';

  ngOnInit(): void {
    this.guid = this.getId();
    if(this.tokenStorage.getUser()){
      this.puntos = this.tokenStorage.getUser().puntos;
    }
    this.getUserByGuid();
    this.getAsignaturasByTutor();
    this.rol = this.auth.getRole().toUpperCase();
    console.log("ROLE: "  + this.auth.getRole().toUpperCase())
  }

  public getId(): number {
    let user = this.tokenStorage.getUser();
    if (user) {
      return user.id;
    }

    return 0;
  }


  public getUserByGuid(): any {
    this.userService.getUserByGuid(this.guid)
      .subscribe((res: any) => {
        this.actualUser = res;
      })
  }
  public getAsignaturasByTutor(): any{
    this.userService.getAsignaturaByIdTutor(this.guid)
      .subscribe((res: any) => {
        this.actualAsignaturas = res.asignaturas;
      })
  }

  actualizarPerfil(form: NgForm){
    if (!this.actualUser.username) {
      Swal.fire('Error', 'El nombre de usuario no es correcto', 'error')
      return;
    }
    if (!this.actualUser.nombre) {
      Swal.fire('Error', 'Debe indicarse un nombre', 'error')
      return;
    }
    if (!this.actualUser.apellidos) {
      Swal.fire('Error', 'Deben indicarse los apellidos', 'error')
      return;
    }
    if (!this.actualUser.email) {
      Swal.fire('Error', 'Debe indicarse un email', 'error')
      return;
    }
    if (!this.actualUser.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      Swal.fire('Error', 'Este email no es valido', 'error')
      return;
    }
    if (!(this.actualUser.telefono == '') && !(this.actualUser.telefono == null)) {
      if (!this.actualUser.telefono.match("[0-9]{9}")) {
        return;      Swal.fire('Error', 'El teléfono debe contener 9 dígitos', 'error')
  
      }
    }
    if (!this.actualUser.universidad) {
      Swal.fire('Error', 'Debe indicarse una Universidad', 'error')
      return;
    }
    if (!this.actualUser.grado) {
      Swal.fire('Error', 'Debe indicarse un grado', 'error')
      return;
    }
    this.userService.getActualizarPerfil(this.guid,this.actualUser.username,this.actualUser.nombre,this.actualUser.apellidos,this.actualUser.email,this.actualUser.universidad,this.actualUser.grado,this.actualUser.descripcion,this.actualUser.telefono).subscribe(async response => {
      console.log(response)
      if (response.result == 0) {
        Swal.fire('Error', response.mensaje, 'error')
      }
      if (response.result == 1) {
        Swal.fire('Éxito', 'Se ha editado el usuario con éxito', 'success').then(function () {
          window.location.reload();
        })
      }
    }, err => {
      console.log(err)
      Swal.fire('Error', 'Se ha producido un error editando el usuario', 'error')
      return;
    }
    );
  }

  studypoints(){
    Swal.fire({
      title:'Studypoints',
      text:'Ganas un studypoint por cada tutoría que pagas. Con 15 studypoints puedes canjear una tutoría de menos de 15.50€ o recibir un descuento de 10€ en una clase mas cara.',
      imageUrl: '../../../assets/logoSinFondo.png',
      imageWidth: 200,
      imageHeight: 120,
      imageAlt: 'Studypoints',
    })
  }


}