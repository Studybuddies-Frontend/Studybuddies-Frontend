import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-class-list-student',
  templateUrl: './class-list-student.component.html',
  styleUrls: ['./class-list-student.component.css']
})
export class ClassListStudentComponent implements OnInit {

  rooms = []
  
  constructor(public roomService: SalasService) { 
  }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getRooms()
      .subscribe((res: any)=> {
        console.log(res.allRoom)
        this.rooms = res.allRoom;
      })
  }
}
