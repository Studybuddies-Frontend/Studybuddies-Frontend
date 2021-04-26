import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-mytutorias-list-student',
  templateUrl: './mytutorias-list-student.component.html',
  styleUrls: ['./mytutorias-list-student.component.css'],
})
export class MytutoriasListStudentComponent implements OnInit {
  userId: number;
  rooms = [];

  constructor(
    public roomService: SalasService,
    public authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.userId = this.getId();
    console.log(this.userId);
    this.getMyTutorias();
  }

  //Hay que hacer método en el back, cambiar aqui el método a tutorías, añadir en el navbar de tutor, meter la url en el app module

  getMyTutorias() {
    this.roomService.getMyTutoriasAuth(this.userId).subscribe((res: any) => {
      console.log(res);
      console.log(res.salasEstudio);
      this.rooms = res.salasEstudio.sort(
        (a: { date: Date }, b: { date: Date }) => (a.date > b.date ? 1 : -1)
      );
    });
  }

  public getId(): number {
    let user = this.tokenStorage.getUser();
    console.log(user);
    if (user) {
      return user.id;
    }

    return 0;
  }
}
