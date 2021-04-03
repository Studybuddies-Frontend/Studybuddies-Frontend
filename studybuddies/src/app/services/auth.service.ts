import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  private urlLogin: string = '';

  constructor(private http: HttpClient) {}

  getUrl(){
    return this.urlLogin
  }

  /* signUp(user: any){
    return this.http.post<any>(this.URL + '/user/register', user);
  } */

  login(username: string, password: string): Observable<any>{
    this.urlLogin = `${environment.urlBackend}${environment.rutaLogin}`
    let data = {
      username: username,
      password: password
    }
    return this.http.post(this.urlLogin, data, {headers: this.httpHeaders})
  }

  /* signIn(user: any){
    return this.http.post<any>(this.URL + environment.rutaLogin, user);
  } */
  constructor() { }
}
