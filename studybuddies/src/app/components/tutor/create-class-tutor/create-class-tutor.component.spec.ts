import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassTutorComponent } from './create-class-tutor.component';

describe('CreateClassTutorComponent', () => {
  let component: CreateClassTutorComponent;
  let fixture: ComponentFixture<CreateClassTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
