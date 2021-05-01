import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclassesListStudentComponent } from './myclasses-list-student.component';
import { ClassFilterPipe } from '../../../pipes/class-filter.pipe';



describe('MyclassesListStudentComponent', () => {
  let component: MyclassesListStudentComponent;
  let fixture: ComponentFixture<MyclassesListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      declarations: [ MyclassesListStudentComponent,ClassFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassesListStudentComponent);
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

  it('getMyRooms', () => {
    component.getMyRooms()
    expect(component.getMyRooms).toBeTruthy();
  });

  it('getId', () => {
    component.getId()
    expect(component.getId).toBeTruthy();
  });
});
