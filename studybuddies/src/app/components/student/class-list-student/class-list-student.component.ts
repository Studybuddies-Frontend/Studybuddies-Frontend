import { ListService } from './../../../services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-list-student',
  templateUrl: './class-list-student.component.html',
  styleUrls: ['./class-list-student.component.css']
})
export class ClassListStudentComponent implements OnInit {

  datasource: any;

  constructor(public listService: ListService) { }

  ngOnInit() {
    this.listService.listAll().subscribe(
      response => {this.datasource = new Room(response);
      }
    )
  }




}
