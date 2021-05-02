import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const ROOM_KEY = 'room'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY)
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveUserLocalStorage(user:any): void {
    window.localStorage.removeItem(USER_KEY)
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY) || window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
  public saveRoom(guid: any, precio: any): void {
    let room = { guid: guid, precio: precio }
    window.sessionStorage.removeItem(ROOM_KEY)
    window.sessionStorage.setItem(ROOM_KEY, JSON.stringify(room));
  }


}
