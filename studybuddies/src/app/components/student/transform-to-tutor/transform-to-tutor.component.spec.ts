import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "src/app/app.component";
import { TransformToTutorComponent } from "./transform-to-tutor.component";

describe('TransformToTutorComponent', () => {
    let component: TransformToTutorComponent;
    let fixture: ComponentFixture<TransformToTutorComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule, FormsModule ],
        providers: [AppComponent],
        declarations: [ TransformToTutorComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TransformToTutorComponent);
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

    /*it('ngOnInit', () => {
        let form: NgForm = new NgForm;
        component.upgradeTutor(form)
        expect(component.upgradeTutor).toBeTruthy();
      });*/
});