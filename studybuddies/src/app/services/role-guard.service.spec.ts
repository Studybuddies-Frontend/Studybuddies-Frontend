import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
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

  /*it('canActivate', () => {
    const route: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    const expectedRole = route.data.expectedRole;
    expect(service.canActivate(route)).toBeTruthy();
  });*/
});
