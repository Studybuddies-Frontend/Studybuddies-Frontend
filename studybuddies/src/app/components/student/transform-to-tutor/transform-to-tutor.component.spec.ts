import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformToTutorComponent } from './transform-to-tutor.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';


describe('TransformToTutorComponent', () => {
  let component: TransformToTutorComponent;
  let fixture: ComponentFixture<TransformToTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, , FormsModule, RouterTestingModule, AuthService, AppComponent, UserService, TokenStorageService],
      declarations: [ TransformToTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformToTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
