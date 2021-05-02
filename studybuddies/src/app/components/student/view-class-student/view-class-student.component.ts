import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-class-student',
  templateUrl: './view-class-student.component.html',
  styleUrls: ['./view-class-student.component.css']
})
export class ViewClassStudentComponent implements OnInit {
  guid!: string;
  actualRoom!: any;
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private roomService: SalasService) { }

  ngOnInit(): void {
    this.userId = this.getId();
    this.guid = this.route.snapshot.params['guid']
    this.getRoomByGuid();
  }

  public getRoomByGuid() {
    this.roomService.getRoomByGuid(this.guid)
      .subscribe((res: any) => {
        this.actualRoom = res.room[0];
      })
  }

  public getId(): number {
    const user = window.sessionStorage.getItem('auth-user');
    if (user) {
      let jsonUser = JSON.parse(user);
      return jsonUser.id;
    }

    return 0;
  }

  public deleteRoom() {
    this.roomService.deleteRooms(this.guid).subscribe(
      res => {
        Swal.fire('Éxito', 'La sala se ha borrado correctamente".', 'success').then(function () {
          window.location.href = "./student/classList";
        })
        console.log("Sala borrada con éxito.");
      },
      err => console.log(err)
    )
  }

}
