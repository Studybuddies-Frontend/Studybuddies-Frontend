import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-class-list-tutor',
  templateUrl: './class-list-tutor.component.html',
  styleUrls: ['./class-list-tutor.component.css'],
})
export class ClassListTutorComponent implements OnInit {
  tutorias = [];
  search: string;

  constructor(public roomService: SalasService) {}

  ngOnInit(): void {
    this.getTutorias();
  }

  getTutorias() {
    this.roomService.getTutoriasActivas()
      .subscribe((res: any)=> {
        this.tutorias = res.tutorias.sort((a: { date: Date; }, b: { date: Date; }) => (a.date > b.date) ? 1 : -1);
      })
  }
}
