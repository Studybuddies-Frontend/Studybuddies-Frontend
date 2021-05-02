import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorFilterPipe } from 'src/app/pipes/tutor-filter.pipe';

import { MytutorsComponent } from './mytutors.component';

describe('MytutorsComponent', () => {
  let component: MytutorsComponent;
  let fixture: ComponentFixture<MytutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MytutorsComponent, TutorFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getId', () => {
    component.getId()
    expect(component.getId).toBeTruthy();
  });

  it('getMyTutores', () => {
    component.getMyTutores()
    expect(component.getMyTutores).toBeTruthy();
  });
});
