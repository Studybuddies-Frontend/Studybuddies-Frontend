import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoleGuardService } from './role-guard.service';

describe('RoleGuardService', () => {
  let service: RoleGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule, RouterTestingModule
      ]
    });
    service = TestBed.inject(RoleGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
