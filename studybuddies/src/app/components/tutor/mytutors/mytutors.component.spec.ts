import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytutorsComponent } from './mytutors.component';

describe('MytutorsComponent', () => {
  let component: MytutorsComponent;
  let fixture: ComponentFixture<MytutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytutorsComponent ]
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
});
