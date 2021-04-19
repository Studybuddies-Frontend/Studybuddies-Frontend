import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  public _users: any[] = [];

  private urlUsers = '';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {
    this.urlUsers = `${environment.urlBackend}/user`
  }

  getTutorById(id: any): Observable<any> {
    let url = this.urlUsers + `/${id}`
    return this.http.get(url, { headers: this.httpHeaders })
  }
}
