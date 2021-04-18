import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { AuthService } from "src/app/services/auth.service";


@Component({
  selector: 'app-view-class-tutor',
  templateUrl: './view-class-tutor.component.html',
  styleUrls: ['./view-class-tutor.component.css']
})
export class ViewClassTutorComponent implements OnInit {

  guid!: string;
  actualRoom!: any;
  authorised_users: string[];
  id_user_app: any;
  paid = false;

  constructor(
    private route: ActivatedRoute,
    private roomService: SalasService,
    private router: Router,
    public tokenStorage: TokenStorageService, public auth: AuthService) {
  }

  ngOnInit(): void {
    
    this.guid = this.route.snapshot.params['guid']
    this.getRoomByGuid();
    this.getAuthUsers();
    this.id_user_app = this.auth.getId();
    
  }

  private getRoomByGuid() {
    this.roomService.getRoomByGuid(this.guid)
      .subscribe((res: any) => {
        this.actualRoom = res.room[0];
        console.log(this.actualRoom)
      })
  }

  private getAuthUsers() {
    this.roomService.getRoomByGuid(this.guid)
      .subscribe((res: any) => {
        this.authorised_users = res.room[0].authorised_users;
        if(this.authorised_users.includes(this.id_user_app) || res.room[0].id_user == this.id_user_app){
          this.paid = true;
        }
      })
    return this.authorised_users

  }
  reloadPage(): void {
    window.location.reload()
  }

  saveData() {
    this.reloadPage();
    return this.tokenStorage.saveRoom(this.guid, this.actualRoom['price_per_hour']);
  }


  public getTutor(){
    this.router.navigateByUrl(`/tutor/show/${this.actualRoom.id_user}`);
  }
}
