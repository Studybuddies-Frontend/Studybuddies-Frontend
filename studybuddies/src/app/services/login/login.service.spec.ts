import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from 'src/app/models/user';


describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.inject(LoginService);
    expect(service).toBeTruthy();
  });

  it('logout', () => {
    const service: LoginService = TestBed.inject(LoginService);
    expect(service.logout()).toBeTruthy();
  });

  it('storeToken', () => {
    const service: LoginService = TestBed.inject(LoginService);
    const user: User = new User();
    expect(service.storeToken(user)).toBeTruthy();
  });

  it('getPrincipal', () => {
    const service: LoginService = TestBed.inject(LoginService);
    expect(service.getPrincipal()).toBeTruthy();
  });
});

