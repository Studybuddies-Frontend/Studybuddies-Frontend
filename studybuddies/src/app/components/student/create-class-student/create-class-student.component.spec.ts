import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassStudentComponent } from './create-class-student.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, NgForm } from '@angular/forms';
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

  it('ngOnInit', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });

  /*it('validate', () => {
    let form: NgForm = new NgForm();
    component.validate(form);
    expect(component.validate).toBeTruthy();
  });*/

  it('containsSpam', () => {
    component.containsSpam("hola");
    expect(component.containsSpam).toBeTruthy();
  });

  it('removeAccents', () => {
    component.removeAccents("hola");
    expect(component.removeAccents).toBeTruthy();
  });

 /* it('createRoom', () => {
    component.createRoom(new NgForm());
    expect(component.removeAccents).toBeTruthy();
  });*/
});

