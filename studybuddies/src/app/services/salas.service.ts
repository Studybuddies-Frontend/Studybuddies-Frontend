import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  public _rooms: any[] = [];

  private urlRooms = '';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {
    this.urlRooms = `${environment.urlBackend}${environment.rutaSalas}`
  }

  public getRooms() {
    let url = this.urlRooms + `/all`;
    return this.http.get(url, { headers: this.httpHeaders })
  }
}
