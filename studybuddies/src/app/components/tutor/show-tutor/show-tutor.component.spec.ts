import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClassFilterPipe } from '../../../pipes/class-filter.pipe';


import { ShowTutorComponent } from './show-tutor.component';


describe('MyclassesListTutorComponent', () => {
  let component: ShowTutorComponent;
  let fixture: ComponentFixture<ShowTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ ShowTutorComponent,ClassFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTutorComponent);
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

  it('getTutorById', () => {
    component.getTutorById()
    expect(component.getTutorById).toBeTruthy();
  });

  it('getAsignaturasByTutor', () => {
    component.getAsignaturasByTutor()
    expect(component.getAsignaturasByTutor).toBeTruthy();
  });
});
