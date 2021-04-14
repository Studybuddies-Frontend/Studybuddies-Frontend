import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  guid!: string;
  actualUser!: any;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
  this.guid = this.route.snapshot.params['guid']
  this.getUserByGuid();
  }

  private getUserByGuid() {
    this.userService.getUserByGuid(this.guid)
      .subscribe((res: any) => {
        this.actualUser = res.user[0];
        console.log(this.actualUser)
      })
  }

  

}
