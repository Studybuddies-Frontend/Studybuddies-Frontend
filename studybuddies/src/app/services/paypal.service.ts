import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  private urlLogin: string = '';
  constructor(public http:HttpClient) { }

  updateRoomPayment(guid: string, id_user: number){
    this.urlLogin = `${environment.urlBackend}${environment.rutaSalas}${environment.rutaPayment}`
    let roomData = { guid: guid, id_user: id_user }
    let respuesta = this.http.post(this.urlLogin, roomData);
    console.log(respuesta)
    return respuesta;
  }
}
