import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclassesListTutorComponent } from './myclasses-list-tutor.component';

describe('MyclassesListTutorComponent', () => {
  let component: MyclassesListTutorComponent;
  let fixture: ComponentFixture<MyclassesListTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclassesListTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassesListTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
