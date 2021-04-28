import { TestBed } from '@angular/core/testing';

import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  let service: TokenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*it('signOut', () => {
    expect(service.signOut()).toBeTruthy();
  });

  it('saveUser', () => {
    expect(service.saveUser(0)).toBeTruthy();
  });

  it('getUser', () => {
    expect(service.getUser()).toBeTruthy();
  });

  it('saveRoom', () => {
    expect(service.saveRoom(0,0)).toBeTruthy();
  });*/

  

});
