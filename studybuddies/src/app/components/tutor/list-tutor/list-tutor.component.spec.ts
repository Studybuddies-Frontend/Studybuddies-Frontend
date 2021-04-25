import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTutorComponent } from './list-tutor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ListTutorComponent', () => {
  let component: ListTutorComponent;
  let fixture: ComponentFixture<ListTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTutorComponent ],
      imports: [ HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
