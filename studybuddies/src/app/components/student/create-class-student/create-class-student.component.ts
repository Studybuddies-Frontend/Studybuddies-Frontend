import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../services/class.service";
import { NgForm } from "@angular/forms";
import { Class } from "../../../models/class";
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
import Swal from 'sweetalert2'



@Component({
  selector: 'app-create-class-student',
  templateUrl: './create-class-student.component.html',
  styleUrls: ['./create-class-student.component.css']
})
export class CreateClassStudentComponent implements OnInit {

  constructor(public roomService: RoomService, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {
  }

  validate(form: NgForm){

    let iDay = form.value.iTime.split(":");
    let fDay = form.value.fTime.split(":");
    let date = form.value.date.split("-");
    let uni = form.value.university;
    let deg = form.value.degree;
    let sub = form.value.subject;
    let des = form.value.description;
    let isCorrect = true;
    let now = new Date();

    

    let checkMismoDia = parseInt(date[0]) == now.getFullYear() && parseInt(date[1]) == now.getMonth()+1 && parseInt(date[2]) == now.getDate();
    let checkHoraPasada = parseInt(iDay[0]) < now.getHours() || parseInt(iDay[0])==now.getHours() && parseInt(iDay[1]) < now.getMinutes();
    let checkHoraInicioMayorQueFin = parseInt(iDay[0]) > parseInt(fDay[0]) || parseInt(iDay[0])==parseInt(fDay[0]) && parseInt(iDay[1]) >= parseInt(fDay[1]);
    let checkDiaPasado = parseInt(date[0]) < now.getFullYear() || parseInt(date[0]) == now.getFullYear() && parseInt(date[1]) < now.getMonth()+1 || parseInt(date[0]) == now.getFullYear() && parseInt(date[1]) == now.getMonth()+1 && parseInt(date[2]) < now.getDate();

    document.getElementById("formErrorDate")!.innerHTML = "";
    document.getElementById("formErrorDay")!.innerHTML = "";
    document.getElementById("formErrorUni")!.innerHTML = "";
    document.getElementById("formErrorDeg")!.innerHTML = "";
    document.getElementById("formErrorSub")!.innerHTML = "";
    document.getElementById("formErrorDes")!.innerHTML = "";

    if (checkDiaPasado) {
      document.getElementById("formErrorDate")!.innerHTML = "La fecha no puede ser pasada";
      isCorrect = false;
    }

    if(checkMismoDia && checkHoraPasada){
      document.getElementById("formErrorDay")!.innerHTML = "La hora de fin debe ser posterior a la de inicio";
      isCorrect = false;
    }

    if( checkHoraInicioMayorQueFin ){
      document.getElementById("formErrorDay")!.innerHTML = "La hora de inicio debe ser posterior a la actual";
      isCorrect = false;
    }

    if(this.containsSpam(uni) || uni.toLowerCase().includes("coño") ||  uni.toLowerCase().includes("cóño") ||  uni.toLowerCase().includes("cóñó") ||  uni.toLowerCase().includes("coñó")){
      document.getElementById("formErrorUni")!.innerHTML = "La descripción contiene palabras prohibidas";
      isCorrect = false;
    }

    if(this.containsSpam(deg) || deg.toLowerCase().includes("coño") ||  deg.toLowerCase().includes("cóño") ||  deg.toLowerCase().includes("cóñó") ||  deg.toLowerCase().includes("coñó")){
      document.getElementById("formErrorDeg")!.innerHTML = "El grado contiene palabras prohibidas";
      isCorrect = false;
    }

    if(this.containsSpam(sub) || sub.toLowerCase().includes("coño") ||  sub.toLowerCase().includes("cóño") ||  sub.toLowerCase().includes("cóñó") ||  sub.toLowerCase().includes("coñó")){
      document.getElementById("formErrorSub")!.innerHTML = "La asignatura contiene palabras prohibidas";
      isCorrect = false;
    }

    if(this.containsSpam(des) || des.toLowerCase().includes("coño") ||  des.toLowerCase().includes("cóño") ||  des.toLowerCase().includes("cóñó") ||  des.toLowerCase().includes("coñó")){
      document.getElementById("formErrorDes")!.innerHTML = "La descripción contiene palabras prohibidas";
      isCorrect = false;
    }

    return isCorrect;
  }

  containsSpam(str:string){
    const spam = ["ostia", "joder", "puta", "viagra", "gilipollas", "cabron", "imbecil", "idiota", "subnormal", "maricon", "mierda"]
    let isSpam = false;
    str=str.toLowerCase();
    str=this.removeAccents(str);

    for(let i=0; i<spam.length; i++){
      if(spam.indexOf(str) > -1){
        isSpam = true;
      }
    }
    return isSpam;
  }

  removeAccents(str:string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
      price_per_hour : 0,
      is_private : false,
      date : form.value.date,
      iTime : form.value.iTime,
      fTime : form.value.fTime,
      guid : '',
      authorised_users : [],
      room_url : ''
    };

    if(this.validate(form)){
      console.log(room)
      form.resetForm();
      this.roomService.createRoom(room).subscribe(
        res => { //NO SE COMO PUEDO PROBAR ESTO
          Swal.fire('Éxito', 'La sala se ha creado correctamente', 'success').then(function () {
            window.location.href = "./student/classList";
          })
        },
        err => {
          console.error(err)
          Swal.fire('Error', 'Ha surgido un problema. Inténtelo de nuevo', 'error').then(function () {
            form.reset();
          })
        } 
        
      );

      //this.router.navigate(["/student/classList"])
    }
  }


}
