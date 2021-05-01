import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { AuthService } from "src/app/services/auth.service";
import Swal from 'sweetalert2';
import { PaypalService } from 'src/app/services/paypal.service';


@Component({
  selector: 'app-view-class-tutor',
  templateUrl: './view-class-tutor.component.html',
  styleUrls: ['./view-class-tutor.component.css']
})
export class ViewClassTutorComponent implements OnInit {

  guid!: string;
  actualRoom!: any;
  actualAuthorizedUsers!: any;
  authorised_users: string[];
  id_user_app: any;
  paid = false;
  private role: string = '';
  showTutorBoard = false;
  puntos: number;
  user: any;


  constructor(
    public paypalService: PaypalService,
    private route: ActivatedRoute,
    private roomService: SalasService,
    private router: Router,
    public tokenStorageService: TokenStorageService, public auth: AuthService) {
  }

  ngOnInit(): void {

    this.guid = this.route.snapshot.params['guid']
    this.getRoomByGuid();
    this.getAuthUsers();
    this.getAuthorizedUsers();
    this.id_user_app = this.auth.getId();
    this.user = this.tokenStorageService.getUser();
    this.puntos = this.tokenStorageService.getUser().puntos;
    console.log(this.user)
    this.showTutorBoard = this.role == 'tutor';

  }

  public getRoomByGuid() {
    this.roomService.getRoomByGuid(this.guid)
      .subscribe((res: any) => {
        this.actualRoom = res.room[0];
        console.log(this.actualRoom)
      })
  }

  public getAuthorizedUsers() {
    this.roomService.getAuthorizedUsers(this.guid)
      .subscribe((res: any) => {
        this.actualAuthorizedUsers = res.usuarios_autorizados;
        
        console.log(this.actualAuthorizedUsers)
      })
  }

  public getAuthUsers() {
    this.roomService.getRoomByGuid(this.guid)
      .subscribe((res: any) => {
        this.authorised_users = res.room[0].authorised_users;
        if (this.authorised_users.includes(this.id_user_app) || res.room[0].id_user == this.id_user_app) {
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
    return this.tokenStorageService.saveRoom(this.guid, this.actualRoom['price_per_hour']);
  }


  public getTutor() {
    this.router.navigateByUrl(`/tutor/show/${this.actualRoom.id_user}`);
  }

  public deleteRoom() {
    console.log(this.guid)
    this.roomService.deleteRooms(this.guid).subscribe(
      res => {
        Swal.fire('Éxito', 'La tutoría se ha borrado correctamente".', 'success').then(function () {
          window.location.href = "./tutor/classList";
        })
        console.log("Tutoría borrada con éxito.");
        console.log(res)
      },
      err => console.log(err)
    )
  }

  public freeRoom() {
    this.paypalService.updateRoomPayment(this.guid, this.id_user_app, true).subscribe(
      res => {
        Swal.fire('Éxito', 'El pago se ha realizado correctamente. Puede acceder a la sala desde "Mis tutorias pagadas".', 'success').then(function () {
          window.location.href = "./tutor/classList";
        })
        console.log("PAGO realizado con éxito.");
        this.user.puntos -= 15;
        this.tokenStorageService.saveUser(this.user);
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
