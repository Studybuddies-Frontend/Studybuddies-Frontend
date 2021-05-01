import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PaypalService } from './paypal.service';


describe('PaypalService', () => {
  let service: PaypalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
      ]
    });
    service = TestBed.inject(PaypalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('updateRoomPayment', () => {
    expect(service.updateRoomPayment("hola", 0)).toBeTruthy();
  });
});
