import { TutorService } from 'src/app/services/tutor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tutor',
  templateUrl: './list-tutor.component.html',
  styleUrls: ['./list-tutor.component.css'],
})
export class ListTutorComponent implements OnInit {
  tutores = [];

  constructor(public tutorService: TutorService) {}

  ngOnInit(): void {
    this.getTutores();
  }

  getTutores() {
    this.tutorService.getTutores().subscribe((res: any) => {
      console.log(res.tutores);
      this.tutores = res.tutores;
    });
  }
}
