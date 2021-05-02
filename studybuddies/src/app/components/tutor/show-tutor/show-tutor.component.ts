import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorService } from 'src/app/services/tutor.service';
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-show-tutor',
  templateUrl: './show-tutor.component.html',
  styleUrls: ['./show-tutor.component.css']
})
export class ShowTutorComponent implements OnInit {

  id!: string;
  actualUser!: any;
  actualAsignaturas: any[]= [];

  constructor(  private tutorService: TutorService,
    private userService: UserService,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAsignaturasByTutor();
    this.getTutorById();
  }

  public getTutorById(){
    this.tutorService.getTutorById(this.id)
      .subscribe((res: any) => {
        this.actualUser = res;
      })
  }

  public getAsignaturasByTutor(){
    this.userService.getAsignaturaByIdTutor(this.id)
      .subscribe((res: any) => {
        this.actualAsignaturas = res.asignaturas;
        console.log(this.actualAsignaturas)
      })
  }
}
