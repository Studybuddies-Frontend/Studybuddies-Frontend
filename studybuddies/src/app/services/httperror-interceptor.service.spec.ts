import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { HTTPErrorInterceptorService } from './httperror-interceptor.service';

describe('HTTPErrorInterceptorService', () => {
  let service: HTTPErrorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(HTTPErrorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
