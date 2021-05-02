import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { ViewClassTutorComponent } from './view-class-tutor.component';

describe('ViewClassTutorComponent', () => {
  let component: ViewClassTutorComponent;
  let fixture: ComponentFixture<ViewClassTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule],
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

  it('ngOnInit', () => {
    component.ngOnInit()
    expect(component.ngOnInit).toBeTruthy();
  });
  
  it('getRoomByGuid', () => {
    component.getRoomByGuid()
    expect(component.getRoomByGuid).toBeTruthy();
  });

  it('getAuthorizedUsers', () => {
    component.getAuthorizedUsers()
    expect(component.getAuthorizedUsers).toBeTruthy();
  });

  it('getAuthUsers', () => {
    component.getAuthUsers()
    expect(component.getAuthUsers).toBeTruthy();
  });

  /*it('saveData', () => {
    component.saveData()
    expect(component.saveData).toBeTruthy();
  });*/

  //gettutor da problemas



});
