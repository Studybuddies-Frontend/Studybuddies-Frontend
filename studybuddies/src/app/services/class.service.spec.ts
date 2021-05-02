import { TestBed } from '@angular/core/testing';

import { RoomService } from './class.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Class } from '../models/class';


describe('RoomService', () => {
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,  ]
    });
    service = TestBed.inject(RoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*it('createRoom', () => {
    const clase: Class = new Class();
    expect(service.createRoom(clase)).toBeTruthy();
  });*/
});
