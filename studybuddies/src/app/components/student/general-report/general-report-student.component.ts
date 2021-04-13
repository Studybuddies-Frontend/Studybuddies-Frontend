import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-general-report-student',
  templateUrl: './general-report-student.component.html',
  styleUrls: ['./general-report-student.component.css']
})
export class GeneralReportStudentComponent implements OnInit {
  

  constructor() { }
  
  ngOnInit(): void {
  }

  validate(form: NgForm){

    let isCorrect;


    return isCorrect;
  }

  createReport(form: NgForm){
    if(this.validate(form)){
      
    }  
  }
  

}
