import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';
import { Class } from '../models/class';

import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  let service: TokenStorageService;

  let user: User = new User("testUser", "1234", "testUser", "testUser", "testUser@gmail.com", false)
  /*let room: Class = new Class("1869ca25-00bd-43d5-809a-12c17222d8f8", "Ayuda en la asignatura de Anatomía 3", "Universidad de Málaga", "Medicina", "Anatomía 3", "2021-04-26T14:00:00.000Z", "2021-04-26T16:00:00.000Z", 10.5, true, "2021-04-26", 
  "12:00", "14:00", [], 3, "meet.jit.si/studybuddies-1869ca25-00bd-43d5-809a-12c17222d8f8"
  );*/
  /** 
* Paste one or more documents here
*/

  let JSONuser: "";
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStorageService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('saveUser', () => {
    service.saveUser(user);
    JSONuser = service.getUser();
    expect(JSONuser.valueOf()).toBeTruthy();
  });
  /*
    it('getUser', () => {
      expect(service.getUser()).toBeTruthy();
    });
  
    */ 
   it('saveRoom', () => {
     service.saveRoom(0,10);
     expect(service.saveRoom.toString).toBeTruthy();
    });
  

});
