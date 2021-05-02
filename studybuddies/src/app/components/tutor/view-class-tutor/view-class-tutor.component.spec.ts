import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassTutorComponent } from './view-class-tutor.component';

describe('ViewClassTutorComponent', () => {
  let component: ViewClassTutorComponent;
  let fixture: ComponentFixture<ViewClassTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClassTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
