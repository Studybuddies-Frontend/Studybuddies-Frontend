import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUser = '';
  private urlTutor = '';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { 
    this.urlUser = `${environment.urlBackend}/user`,
    this.urlTutor = `${environment.urlBackend}/tutor`
  }

  getUserByGuid(guid:any): Observable<any> {
    let url = this.urlUser + `/${guid}`
    console.log(url)
    return this.http.get(url, { headers: this.httpHeaders })
  }

  getAsignaturaByIdTutor(guid:any): Observable<any> {
    let url = this.urlTutor + `/asignaturas` + `/${guid}`
    return this.http.get(url, { headers: this.httpHeaders })
  }
  
  getActualizarPerfil(guid:any, username:any, nombre: any, apellidos:string, email:string, universidad:string, grado:string, descripcion:string, telefono:string): Observable<any>{
    let url = this.urlUser + /update
    let data = {
      id:guid,
      username: username,
      nombre: nombre,
      apellidos: apellidos,
      email: email,
      universidad: universidad,
      grado: grado,
      descripcion: descripcion,
      telefono: telefono
    }
    return this.http.post(url, data, {headers: this.httpHeaders})
  }
  
  upgradeTutor(descripcion: string, telefono: string, id: number){
    let url = ${environment.urlBackend}${environment.rutaTransform}/${id}
    let data = {
      descripcion: descripcion,
      telefono: telefono
    }
    return this.http.post(url, data, {headers: this.httpHeaders})
  }
}
