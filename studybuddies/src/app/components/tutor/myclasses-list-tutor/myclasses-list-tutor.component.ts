import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myclasses-list-tutor',
  templateUrl: './myclasses-list-tutor.component.html',
  styleUrls: ['./myclasses-list-tutor.component.css']
})
export class MyclassesListTutorComponent implements OnInit {

  userId: number;
  rooms = [];

  constructor(public roomService: SalasService, public authService: AuthService) { }

  ngOnInit(): void {
    this.userId = this.getId();
    console.log(this.userId)
    this.getMyRooms();
  }

  //Hay que hacer método en el back, cambiar aqui el método a tutorías, añadir en el navbar de tutor, meter la url en el app module

  getMyRooms() {
    this.roomService.getMyRooms(this.userId)
      .subscribe((res: any)=> {
        console.log(res)
        console.log(res.salasEstudio)
        this.rooms = res.salasEstudio;
      })
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

}
