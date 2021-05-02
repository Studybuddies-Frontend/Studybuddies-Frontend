import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateClassTutorComponent } from './create-class-tutor.component';

describe('CreateClassTutorComponent', () => {
  let component: CreateClassTutorComponent;
  let fixture: ComponentFixture<CreateClassTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, FormsModule ],
      declarations: [ CreateClassTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClassTutorComponent);
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

  it('containsSpam', () => {
    component.containsSpam("hola")
    expect(component.containsSpam).toBeTruthy();
  });

  it('removeAccents', () => {
    component.removeAccents("hola")
    expect(component.removeAccents).toBeTruthy();
  });

});
