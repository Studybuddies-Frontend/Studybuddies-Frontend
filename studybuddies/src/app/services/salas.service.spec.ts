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
});
