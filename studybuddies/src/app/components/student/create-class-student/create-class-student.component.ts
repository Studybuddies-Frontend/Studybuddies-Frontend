import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../services/class.service";
import { NgForm } from "@angular/forms";
import { Class } from "../../../models/class";

@Component({
  selector: 'app-create-class-student',
  templateUrl: './create-class-student.component.html',
  styleUrls: ['./create-class-student.component.css']
})
export class CreateClassStudentComponent implements OnInit {

  constructor(public roomService: RoomService) { }

  ngOnInit(): void {
  }

  createRoom(form: NgForm){

    let date = form.value.date.split("-");
    let iDay = form.value.iTime.split(":");
    let fDay = form.value.fTime.split(":");

    let room: Class = {
      id_user : 0,
      description : form.value.description,
      university : form.value.university,
      degree : form.value.degree,
      subject : form.value.subject,
      starting_time : new Date(parseInt(date[0]), parseInt(date[1])-1, parseInt(date[2]),
      parseInt(iDay[0]), parseInt(iDay[1])),
      ending_time : new Date(parseInt(date[0]), parseInt(date[1])-1, parseInt(date[2]),
      parseInt(fDay[0]), parseInt(fDay[1])),
      price_per_hour : 0,
      is_private : false,
      date : new Date(),
      iTime : new Date(),
      fTime : new Date(),
      guid : '',
      authorised_users : [],
      room_url : ''
    };

    console.log(room);

    this.roomService.createRoom(room).subscribe(
      res => {
        form.reset();
      },  
      err => console.error(err)
    );
  }

}
