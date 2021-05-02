import { Injectable, OnInit } from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { ErrorPageComponent } from '../components/error-page/error-page.component'
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HTTPErrorInterceptorService implements HttpInterceptor {


  constructor(private router: Router) { 
  }
 

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    return next.handle(req).pipe(
       catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // backend error
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }

        if (error.status == '401'){
          this.router.navigateByUrl('/login')
        }else{
          this.router.navigateByUrl('/errorPage');    
        }
        
        return throwError(errorMessage);
        
      })
    );
  }

  
}
