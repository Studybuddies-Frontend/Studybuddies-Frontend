import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassFilterPipe } from '../../../pipes/class-filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


import { MyclassesListTutorComponent } from './myclasses-list-tutor.component';


describe('MyclassesListTutorComponent', () => {
  let component: MyclassesListTutorComponent;
  let fixture: ComponentFixture<MyclassesListTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule, RouterTestingModule ],
      declarations: [ MyclassesListTutorComponent,ClassFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassesListTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
