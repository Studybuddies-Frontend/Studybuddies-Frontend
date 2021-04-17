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

  public isAuthenticated(): boolean {
    return window.sessionStorage.getItem('auth-user') != null
  }

  public getRole(): string {
    const user = window.sessionStorage.getItem('auth-user');
    console.log(user)
    if (user) {
      let jsonUser = JSON.parse(user);
      return jsonUser.role;
    }

    return '';
  }

  public getId(): number {
    const user = window.sessionStorage.getItem('auth-user');
    console.log(user)
    if (user) {
      let jsonUser = JSON.parse(user);
      return jsonUser.id;
    }

    return 0;
  }

  /* signIn(user: any){
    return this.http.post<any>(this.URL + environment.rutaLogin, user);
  } */

  
}
