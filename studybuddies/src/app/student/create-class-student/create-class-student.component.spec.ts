import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassStudentComponent } from './create-class-student.component';

describe('CreateClassStudentComponent', () => {
  let component: CreateClassStudentComponent;
  let fixture: ComponentFixture<CreateClassStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
