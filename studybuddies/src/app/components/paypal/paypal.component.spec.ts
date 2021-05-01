import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPayPalModule } from 'ngx-paypal';


import { PaypalComponent } from './paypal.component';

describe('PaypalComponent', () => {
  let component: PaypalComponent;
  let fixture: ComponentFixture<PaypalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, NgxPayPalModule, ],
      declarations: [PaypalComponent]
    })
    fixture = TestBed.createComponent(PaypalComponent);
    component = fixture.componentInstance;
    setTimeout(function () {
      fixture.detectChanges();
    }, 2000);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });
});
