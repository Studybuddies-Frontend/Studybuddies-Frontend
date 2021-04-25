import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassFilterPipe } from '../../../pipes/class-filter.pipe';


import { MytutoriasListStudentComponent } from './mytutorias-list-student.component';

describe('MytutoriasListStudentComponent', () => {
  let component: MytutoriasListStudentComponent;
  let fixture: ComponentFixture<MytutoriasListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      declarations: [ MytutoriasListStudentComponent,ClassFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytutoriasListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
