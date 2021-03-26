import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { ClassListStudentComponent } from './components/student/class-list-student/class-list-student.component';
import { CreateClassStudentComponent } from './components/student/create-class-student/create-class-student.component';
import { ClassListTutorComponent } from './components/tutor/class-list-tutor/class-list-tutor.component';
import { CreateClassTutorComponent } from './components/tutor/create-class-tutor/create-class-tutor.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'tutor', component: TutorComponent },
  { path: 'student/createClass', component: CreateClassStudentComponent },
  { path: 'student/classList', component: ClassListStudentComponent },
  { path: 'tutor/createClass', component: CreateClassTutorComponent },
  { path: 'tutor/classList', component: ClassListTutorComponent },
  { path: '', component: HomeComponent },
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
