import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  private urlLogin: string = '';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

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
    return this.tokenStorage.getUser() != null 
  }

  public getRole(): string {
    let user = this.tokenStorage.getUser();
    if (user) {
      return user.role;
    }

    return '';
  }


  registerAlumno(username:string, password: string, confirmPassword: string, nombre: string, apellidos:string, email:string, universidad:string, grado:string): Observable<any>{
    this.urlLogin = `${environment.urlBackend}${environment.rutaRegister}/alumno`
    let data = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      universidad: universidad,
      grado: grado
    }
    return this.http.post(this.urlLogin, data, {headers: this.httpHeaders})
  }

  registerTutor(username:string, password: string, confirmPassword: string, nombre: string, apellidos:string, email:string, universidad:string, grado:string, descripcion:string, telefono:string): Observable<any>{
    this.urlLogin = `${environment.urlBackend}${environment.rutaRegister}/tutor`
    let data = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      universidad: universidad,
      grado: grado,
      descripcion: descripcion,
      telefono: telefono
    }
    return this.http.post(this.urlLogin, data, {headers: this.httpHeaders})
  }

  public getId(): number {
    let user = this.tokenStorage.getUser();
    if (user) {
      return user.id;
    }

    return 0;

  }

  /* signIn(user: any){
    return this.http.post<any>(this.URL + environment.rutaLogin, user);
  } */

}
