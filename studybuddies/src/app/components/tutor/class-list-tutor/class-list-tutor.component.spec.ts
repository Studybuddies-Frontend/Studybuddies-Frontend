import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListTutorComponent } from './class-list-tutor.component';
import { ClassFilterPipe } from '../../../pipes/class-filter.pipe';


describe('ClassListTutorComponent', () => {
  let component: ClassListTutorComponent;
  let fixture: ComponentFixture<ClassListTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ClassListTutorComponent,ClassFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
