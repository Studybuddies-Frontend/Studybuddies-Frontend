import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-general-report-student',
  templateUrl: './general-report-student.component.html',
  styleUrls: ['./general-report-student.component.css']
})
export class GeneralReportStudentComponent implements OnInit {
  
  asunto = '';
  description = '';
  emailLink = '';

  constructor() { }
  
  ngOnInit(): void {
    
  }

  /* validate(form: NgForm){

    let isCorrect;


    return isCorrect;
  } */

  createReport(){
    /* if(this.validate(form)){
      
    }  */ 
    this.emailLink = `mailto:soporte.studybuddies@gmail.com?subject=${this.asunto}&body=${this.description}`
    return this.emailLink
    
  }
  

}
