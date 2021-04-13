import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../services/class.service";
import { NgForm } from "@angular/forms";
import { Class } from "../../../models/class";
import { Router } from '@angular/router';


@Component({
  selector: 'app-general-report-student',
  templateUrl: './general-report-student.component.html',
  styleUrls: ['./general-report-student.component.css']
})
export class GeneralReportStudentComponent implements OnInit {

  constructor(public roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
  }

  validate(form: NgForm){

    let isCorrect;


    return isCorrect;
  }

  createRoom(form: NgForm){


    /*
    let date = form.value.date.split("-");
    let iDay = form.value.iTime.split(":");
    let fDay = form.value.fTime.split(":");
    */

    
      
  }
  

}
