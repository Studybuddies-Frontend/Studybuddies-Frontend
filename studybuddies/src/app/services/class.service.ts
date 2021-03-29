import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Room } from "../models/class";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  URL_API = "http://localhost:3000/api/v1/room/create";

  selectedRoom: Room = {
    id_user : "",
    description : "",
    university : "",
    degree : "",
    subject : "",
    starting_time : new Date(),
    ending_time : new Date(),
    price_per_hour : 0,
    is_private : false,
    date : new Date(),
    iTime : new Date(),
    fTime : new Date() 
  };

  constructor(public http:HttpClient) { }

  createRoom(room: Room){
    return this.http.post(this.URL_API, room);
  }
}
