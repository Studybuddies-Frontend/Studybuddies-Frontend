import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { ClassListStudentComponent } from './components/student/class-list-student/class-list-student.component';
import { CreateClassStudentComponent } from './components/student/create-class-student/create-class-student.component';
import { ClassListTutorComponent } from './components/tutor/class-list-tutor/class-list-tutor.component';
import { CreateClassTutorComponent } from './components/tutor/create-class-tutor/create-class-tutor.component';
import { HomeComponent } from './components/home/home.component';
import { ViewClassStudentComponent } from './components/student/view-class-student/view-class-student.component';
import { ViewClassTutorComponent } from './components/tutor/view-class-tutor/view-class-tutor.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ConstructionPageComponent } from './components/construction-page/construction-page.component';
import { LoginComponent } from './components/login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';

const routes: Routes = [
  {
    path: 'student', component: StudentComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'alumno'
    }
  },
  {
    path: 'tutor', component: TutorComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'tutor'
    }
  },
  { path: 'login', component: LoginComponent  },
  {
    path: 'student/createClass', component: CreateClassStudentComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'alumno'
    }
  },
  { path: 'student/classList', component: ClassListStudentComponent, canActivate: [AuthGuardService]  },
  { path: 'student/classView/:guid', component: ViewClassStudentComponent, canActivate: [AuthGuardService]  },
  {
    path: 'tutor/createClass', component: CreateClassTutorComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'tutor'
    }
  },
  { path: 'tutor/classList', component: ClassListTutorComponent, canActivate: [AuthGuardService] },
  { path: 'tutor/classView/:guid', component: ViewClassTutorComponent, canActivate: [AuthGuardService] },
  { path: '', component: HomeComponent },
  { path: 'errorPage', component: ErrorPageComponent },
  { path: 'constructionPage', component: ConstructionPageComponent },
  { path: '**', redirectTo: '' }


];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TutorComponent,
    ClassListStudentComponent,
    ClassListTutorComponent,
    CreateClassStudentComponent,
    CreateClassTutorComponent,
    HomeComponent,
    ViewClassStudentComponent,
    ViewClassTutorComponent,
    ErrorPageComponent,
    ConstructionPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
