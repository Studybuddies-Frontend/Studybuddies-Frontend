import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPayPalModule } from 'ngx-paypal';

import { PaypalComponent } from './paypal.component';

describe('PaypalComponent', () => {
  let component: PaypalComponent;
  let fixture: ComponentFixture<PaypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, NgxPayPalModule ],
      declarations: [ PaypalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
