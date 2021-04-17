import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  guid!: number;
  actualUser!: any;
  actualAsignaturas: any[]= [];
  rol!:any;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.guid = this.getId();
    this.getUserByGuid();
    this.getAsignaturasByTutor();
    this.rol = this.auth.getRole().toUpperCase();
  }

  public getId(): number {
    const user = window.sessionStorage.getItem('auth-user');
    console.log(user)
    if (user) {
      let jsonUser = JSON.parse(user);
      return jsonUser.id;
    }

    return 0;
  }

  private getUserByGuid() {
    this.userService.getUserByGuid(this.guid)
      .subscribe((res: any) => {
        this.actualUser = res;
        console.log(this.actualUser)
      })
  }

  private getAsignaturasByTutor(){
    this.userService.getAsignaturaByIdTutor(this.guid)
      .subscribe((res: any) => {
        this.actualAsignaturas = res.asignaturas;
        console.log(this.actualAsignaturas)
      })
  }

  

}
