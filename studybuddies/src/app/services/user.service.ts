import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = '/user';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { 
    this.urlUser = `${environment.urlBackend}/user`
  }

  getUserByGuid(guid:any): Observable<any> {
    let url = this.urlUser + `/${guid}`
    return this.http.get(url, { headers: this.httpHeaders })
  }
}
