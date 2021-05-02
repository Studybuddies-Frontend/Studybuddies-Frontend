import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-myclasses-list-tutor',
  templateUrl: './myclasses-list-tutor.component.html',
  styleUrls: ['./myclasses-list-tutor.component.css'],
})
export class MyclassesListTutorComponent implements OnInit {
  userId: number;
  rooms = [];
  search: string;

  constructor(
    public roomService: SalasService,
    public authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.userId = this.getId();
    this.getMyRooms();
  }

  getMyRooms() {
    this.roomService.getMyTutorias(this.userId).subscribe((res: any) => {
      this.rooms = res.tutorias.sort((a: { date: Date; }, b: { date: Date; }) => (a.date > b.date) ? 1 : -1);
    });
  }

  public getId(): number {
    let user = this.tokenStorage.getUser();
    if (user) {
      return user.id;
    }

    return 0;
  }
}
