import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../services/class.service";
import { NgForm } from "@angular/forms";
import { Class } from "../../../models/class";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-class-tutor',
  templateUrl: './create-class-tutor.component.html',
  styleUrls: ['./create-class-tutor.component.css']
})
export class CreateClassTutorComponent implements OnInit {

  constructor(public roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
  }

  validate(form: NgForm){

    let iDay = form.value.iTime.split(":");
    let fDay = form.value.fTime.split(":");
    let date = form.value.date.split("-");
    let isCorrect;
    let now = new Date();

    let checkMismoDia = parseInt(date[0]) == now.getFullYear() && parseInt(date[1]) == now.getMonth()+1 && parseInt(date[2]) == now.getDate();
    let checkHoraPasada = parseInt(iDay[0]) < now.getHours() || parseInt(iDay[0])==now.getHours() && parseInt(iDay[1]) < now.getMinutes();
    let checkHoraInicioMayorQueFin = parseInt(iDay[0]) > parseInt(fDay[0]) || parseInt(iDay[0])==parseInt(fDay[0]) && parseInt(iDay[1]) >= parseInt(fDay[1]);
    let checkDiaPasado = parseInt(date[0]) < now.getFullYear() || parseInt(date[0]) == now.getFullYear() && parseInt(date[1]) < now.getMonth()+1 || parseInt(date[0]) == now.getFullYear() && parseInt(date[1]) == now.getMonth()+1 && parseInt(date[2]) < now.getDate();
    
    if (checkHoraInicioMayorQueFin) {
      isCorrect = false;
    } else if(checkDiaPasado){
      isCorrect = false;
    } else if( checkMismoDia && checkHoraPasada){
      isCorrect = false;
    }else {
      isCorrect = true;
    }

    return isCorrect;
  }

  createRoom(form: NgForm){

    console.log(form.value.date);
    console.log(form.value.iTime);
    /*
    let date = form.value.date.split("-");
    let iDay = form.value.iTime.split(":");
    let fDay = form.value.fTime.split(":");
    */
    let room: Class = {
      id_user : 0,
      description : form.value.description,
      university : form.value.university,
      degree : form.value.degree,
      subject : form.value.subject,
      starting_time : form.value.date + "T" + form.value.iTime,
      //new Date(parseInt(date[0]), parseInt(date[1])-1, parseInt(date[2]), parseInt(iDay[0]), parseInt(iDay[1])),
      ending_time : form.value.date + "T" + form.value.fTime,
      //new Date(parseInt(date[0]), parseInt(date[1])-1, parseInt(date[2]), parseInt(fDay[0]), parseInt(fDay[1])),
      price_per_hour : form.value.money,
      is_private : true,
      date : form.value.date,
      iTime : form.value.iTime,
      fTime : form.value.fTime,
      guid : '',
      authorised_users : [],
      room_url : ''

    };
    if(this.validate(form)){
      this.roomService.createRoom(room).subscribe(
        res => {
          form.reset();
        },  
        err => console.error(err)
      );

      this.router.navigate(["/tutor/classList"])
    }

  }

}

