import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TutorService } from './tutor.service';

describe('TutorService', () => {
  let service: TutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTutorById', () => {
    expect(service.getTutorById(0)).toBeTruthy();
  });

  it('getTutores', () => {
    expect(service.getTutores()).toBeTruthy();
  });
});
