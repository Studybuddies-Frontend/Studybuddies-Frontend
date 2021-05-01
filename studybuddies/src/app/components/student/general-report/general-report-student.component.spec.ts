import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralReportStudentComponent } from './general-report-student.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('GeneralReportStudentComponent', () => {
  let component: GeneralReportStudentComponent;
  let fixture: ComponentFixture<GeneralReportStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule, RouterTestingModule, ],
      declarations: [ GeneralReportStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralReportStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit ', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });

  it('createReport ', () => {
    component.createReport();
    expect(component.createReport).toBeTruthy();
  });

  it('navigateToList ', () => {
    component.navigateToList();
    expect(component.navigateToList).toBeTruthy();
  });

});
