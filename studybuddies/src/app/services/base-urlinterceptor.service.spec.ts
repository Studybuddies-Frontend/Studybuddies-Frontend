import { TestBed } from '@angular/core/testing';

import { BaseURLInterceptorService } from './base-urlinterceptor.service';

describe('BaseURLInterceptorService', () => {
  let service: BaseURLInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseURLInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
