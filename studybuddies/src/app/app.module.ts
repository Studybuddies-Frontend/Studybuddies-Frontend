import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import {TranslateCompiler, TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateMessageFormatCompiler} from "ngx-translate-messageformat-compiler";
import { RouterTestingModule } from '@angular/router/testing';


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
import { BaseURLInterceptorService } from './services/base-urlinterceptor.service';
import { HTTPErrorInterceptorService } from './services/httperror-interceptor.service';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'tutor', component: TutorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student/createClass', component: CreateClassStudentComponent },
  { path: 'student/classList', component: ClassListStudentComponent },
  { path: 'student/classView', component: ViewClassStudentComponent },
  { path: 'tutor/createClass', component: CreateClassTutorComponent },
  { path: 'tutor/classList', component: ClassListTutorComponent },
  { path: 'tutor/classView', component: ViewClassTutorComponent },
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
    BrowserAnimationsModule,
    HttpClientTestingModule,
    RouterTestingModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseURLInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HTTPErrorInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http)
}

