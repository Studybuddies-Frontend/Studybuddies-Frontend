import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTutorComponent } from './list-tutor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TutorFilterPipe } from '../../../pipes/tutor-filter.pipe';



describe('ListTutorComponent', () => {
  let component: ListTutorComponent;
  let fixture: ComponentFixture<ListTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTutorComponent, TutorFilterPipe ],
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

  it('ngOnInit', () => {
    component.ngOnInit()
    expect(component.ngOnInit).toBeTruthy();
  });

  it('getTutores', () => {
    component.getTutores()
    expect(component.getTutores).toBeTruthy();
  });

});
