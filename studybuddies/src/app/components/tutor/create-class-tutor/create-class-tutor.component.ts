import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../services/class.service";
import { NgForm } from "@angular/forms";
import { Class } from "../../../models/class";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-class-tutor',
  templateUrl: './create-class-tutor.component.html',
  styleUrls: ['./create-class-tutor.component.css']
})
export class CreateClassTutorComponent implements OnInit {

  constructor(public roomService: RoomService, private router: Router, public auth: AuthService) { }

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
    
    document.getElementById("formErrorDate")!.innerHTML = "";
    document.getElementById("formErrorDay")!.innerHTML = "";
    document.getElementById("formErrorMoney")!.innerHTML = "";
    
    if (checkDiaPasado) {
      document.getElementById("formErrorDate")!.innerHTML = "La fecha no puede ser pasada";
      isCorrect = false;
    } 
    
    if(checkHoraInicioMayorQueFin){
      document.getElementById("formErrorDay")!.innerHTML = "La hora de fin debe ser posterior a la de inicio";
      isCorrect = false;
    } 
    
    if( checkMismoDia && checkHoraPasada){
      document.getElementById("formErrorDay")!.innerHTML = "La hora de inicio debe ser posterior a la actual";
      isCorrect = false;
    } 
    
    if( form.value.money <= 5){
      document.getElementById("formErrorMoney")!.innerHTML = "El precio mínimo de la clase es de 5 euros";
      isCorrect = false;
    }

    if( form.value.money >= 15){
      document.getElementById("formErrorMoney")!.innerHTML = "El precio máximo de la clase es de 15 euros";
      isCorrect = false;
    }
    
    if(form.value.money >= 5 && form.value.money <= 15 && (!checkDiaPasado && !checkHoraInicioMayorQueFin || checkMismoDia && !checkHoraPasada)){
      isCorrect = true;
    }
    
    console.log(form.value.money);
    console.log(isCorrect);

    return isCorrect;
  }

  createRoom(form: NgForm){

    /*
    let date = form.value.date.split("-");
    let iDay = form.value.iTime.split(":");
    let fDay = form.value.fTime.split(":");
    */

    let id_user_app = this.auth.getId();

    let room: Class = {
      id_user : id_user_app,
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
      form.resetForm();
      this.roomService.createRoom(room).subscribe(
        err => console.error(err)
      );

      this.router.navigate(["/tutor/classList"])
    }

  }

}

