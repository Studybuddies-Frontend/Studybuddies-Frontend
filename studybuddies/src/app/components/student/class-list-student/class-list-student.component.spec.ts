import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListStudentComponent } from './class-list-student.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClassFilterPipe } from '../../../pipes/class-filter.pipe';
import { MatSpinner } from '@angular/material/progress-spinner';



describe('ClassListStudentComponent', () => {
  let component: ClassListStudentComponent;
  let fixture: ComponentFixture<ClassListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassListStudentComponent,ClassFilterPipe, MatSpinner],
      imports: [ HttpClientTestingModule,  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListStudentComponent);
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

  it('getRooms', () => {
    component.getRooms();
    expect(component.getRooms).toBeTruthy();
  });

});
