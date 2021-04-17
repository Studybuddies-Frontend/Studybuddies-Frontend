import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateCompiler, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateMessageFormatCompiler } from "ngx-translate-messageformat-compiler";
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
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { BaseURLInterceptorService } from './services/base-urlinterceptor.service';
import { HTTPErrorInterceptorService } from './services/httperror-interceptor.service';
import { NotAuthGuardService } from './services/not-auth-guard.service';
import { MyclassesListStudentComponent } from './components/student/myclasses-list-student/myclasses-list-student.component';
import { MyclassesListTutorComponent } from './components/tutor/myclasses-list-tutor/myclasses-list-tutor.component';
import { MytutoriasListStudentComponent } from './components/student/mytutorias-list-student/mytutorias-list-student.component';
import { ShowTutorComponent } from './components/tutor/show-tutor/show-tutor.component';
import { CommonModule } from '@angular/common';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';


const routes: Routes = [
  /* {
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
  }, */
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuardService] },

  { path: 'perfil', component: PerfilUsuarioComponent },

  {
    path: 'student/createClass', component: CreateClassStudentComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'alumno'
    }
  },
  {
    path: 'student/classList', component: ClassListStudentComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'alumno'
    }
  },
  {
    path: 'student/mine/:id', component: MyclassesListStudentComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'alumno'
    }
  },
  {
    path: 'student/Tmine/:id', component: MytutoriasListStudentComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'alumno'
    }
  },
  {
    path: 'student/classView/:guid', component: ViewClassStudentComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'alumno'
    }
  },
  {
    path: 'tutor/createClass', component: CreateClassTutorComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'tutor'
    }
  },
  {
    path: 'tutor/mine/:id', component: MyclassesListTutorComponent, canActivate: [RoleGuardService],
    data: {
      expectedRole: 'tutor'
    }
  },
  { path: 'tutor/show/:id', component: ShowTutorComponent, canActivate: [RoleGuardService],},
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
    ShowTutorComponent,
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
    LoginComponent,
    MyclassesListStudentComponent,
    MyclassesListTutorComponent,
    MytutoriasListStudentComponent
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    /* HttpClientTestingModule,
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
    }) */
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseURLInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HTTPErrorInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

