import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from 'src/app/services/salas.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-view-class-tutor',
  templateUrl: './view-class-tutor.component.html',
  styleUrls: ['./view-class-tutor.component.css']
})
export class ViewClassTutorComponent implements OnInit {

  guid!: string;
  actualRoom!: any;

  constructor(
    private route: ActivatedRoute,
    private roomService: SalasService,
    public tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.guid = this.route.snapshot.params['guid']
    this.getRoomByGuid();
  }

  private getRoomByGuid() {
    this.roomService.getRoomByGuid(this.guid)
      .subscribe((res: any) => {
        this.actualRoom = res.room[0];
        console.log(this.actualRoom)
      })
  }

  saveData(){
    return this.tokenStorage.saveRoom(this.guid, this.actualRoom['price_per_hour']);
  }
}
