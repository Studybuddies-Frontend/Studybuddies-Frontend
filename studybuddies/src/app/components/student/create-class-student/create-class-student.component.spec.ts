import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassStudentComponent } from './create-class-student.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('CreateClassStudentComponent', () => {
  let component: CreateClassStudentComponent;
  let fixture: ComponentFixture<CreateClassStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule, RouterTestingModule],
      declarations: [ CreateClassStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
