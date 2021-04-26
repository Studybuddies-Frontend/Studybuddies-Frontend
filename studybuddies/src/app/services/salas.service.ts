import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root',
})
export class SalasService {
  public _rooms: any[] = [];

  private urlRooms = '';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
    this.urlRooms = `${environment.urlBackend}${environment.rutaSalas}`;
  }

  public getRooms() {
    let url = this.urlRooms + `/all`;
    return this.http.get(url, { headers: this.httpHeaders });
  }

  public getMyRooms(id: any) {
    let url = this.urlRooms + `/tutor/mine/${id}`;
    return this.http.get(url, { headers: this.httpHeaders });
  }

  public getSalasEstudioActivas() {
    let url = this.urlRooms + `/student/all`;
    return this.http.get(url, { headers: this.httpHeaders });
  }

  public getTutoriasActivas() {
    let url = this.urlRooms + `/tutor/all`;
    return this.http.get(url, { headers: this.httpHeaders });
  }

  public getMyTutoriasAuth(id: any) {
    let url = this.urlRooms + `/Tmine/${id}`;
    console.log(url)
    return this.http.get(url, { headers: this.httpHeaders });
  }

  getRoomByGuid(guid: any): Observable<any> {
    let url = this.urlRooms + `/${guid}`;
    return this.http.get(url, { headers: this.httpHeaders });
  }

  getAuthorizedUsers(guid:any): Observable<any>{
    let url = this.urlRooms +  `/usuariosAutorizados/${guid}`;
    return this.http.get(url, { headers: this.httpHeaders });
  }
}
