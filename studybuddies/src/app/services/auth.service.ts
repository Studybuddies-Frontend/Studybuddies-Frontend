import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  signUp(user){
    return this.http.post<any>(this.URL + '/user/register', user);
  }

  signIn(user){
    return this.http.post<any>(this.URL + '/user/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
