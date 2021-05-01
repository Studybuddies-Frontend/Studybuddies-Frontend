import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
/*
  it('getUserByGuid', () => {
    expect(service.getUserByGuid(0)).toBeTruthy();
  });

  it('getAsignaturaByIdTutor', () => {
    expect(service.getAsignaturaByIdTutor(0)).toBeTruthy();
  });*/
});
