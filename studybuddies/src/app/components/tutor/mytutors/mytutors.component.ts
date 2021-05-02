import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-mytutors',
  templateUrl: './mytutors.component.html',
  styleUrls: ['./mytutors.component.css']
})
export class MytutorsComponent implements OnInit {
  userId: number;
  tutores = [];
  search: string;

  constructor(public tutorService: TutorService, public tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    this.userId = this.getId()
    this.getMyTutores();
  }

  getMyTutores() {
    this.tutorService.getMyTutores(this.userId).subscribe((res: any) => {
      this.tutores = res.tutores;
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
