import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';

@Component({
  selector: 'app-class-list-tutor',
  templateUrl: './class-list-tutor.component.html',
  styleUrls: ['./class-list-tutor.component.css'],
})
export class ClassListTutorComponent implements OnInit {
  tutorias = [];

  constructor(public roomService: SalasService) {}

  ngOnInit(): void {
    this.getTutorias();
  }

  getTutorias() {
    this.roomService.getTutoriasActivas().subscribe((res: any) => {
      console.log(res.tutorias);
      this.tutorias = res.tutorias;
    });
  }
}
