import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-view-class-student',
  templateUrl: './view-class-student.component.html',
  styleUrls: ['./view-class-student.component.css']
})
export class ViewClassStudentComponent implements OnInit {
  guid!: string;
  actualRoom!: any;

  constructor(
    private route: ActivatedRoute,
    private roomService: SalasService) { }

  ngOnInit(): void {
    this.guid = this.route.snapshot.params['guid']
    this.getRoomByGuid();
  }

  public getRoomByGuid() {
    this.roomService.getRoomByGuid(this.guid)
      .subscribe((res: any) => {
        this.actualRoom = res.room[0];
        console.log(this.actualRoom)
      })
  }

}
