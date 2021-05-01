import { TestBed } from '@angular/core/testing';

import { SalasService } from './salas.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SalasService', () => {
  let service: SalasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]});
    service = TestBed.inject(SalasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRooms', () => {
    expect(service.getRooms()).toBeTruthy();
  });

  it('getMyRooms', () => {
    expect(service.getMyRooms(0)).toBeTruthy();
  });

  it('getSalasEstudioActivas', () => {
    expect(service.getSalasEstudioActivas()).toBeTruthy();
  });

  it('getTutoriasActivas', () => {
    expect(service.getTutoriasActivas()).toBeTruthy();
  });

  it('getMyTutoriasAuth', () => {
    expect(service.getMyTutoriasAuth(0)).toBeTruthy();
  });

  it('getRoomByGuid', () => {
    expect(service.getRoomByGuid(0)).toBeTruthy();
  });

  it('getAuthorizedUsers', () => {
    expect(service.getAuthorizedUsers(0)).toBeTruthy();
  });

});
