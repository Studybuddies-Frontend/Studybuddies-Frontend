import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private URL = 'http://localhost:3000/api/v1/room'

  constructor(private http: HttpClient) { }

  listAll(){
    return this.http.get(this.URL + '/all');
  }

}
