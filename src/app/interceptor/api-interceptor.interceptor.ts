import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let commonUrl = 'https://www.googleapis.com/books/v1/';
    const apiKey = 'AIzaSyBqlRIqqp-OJhU4xKC315UtLqhoF1qwDQ4';

    let newRequest = request.clone({
      url: commonUrl + request.url + apiKey
    });

    return next.handle(newRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('badddddd');
        
        console.error('HTTP Error:', error);
        return throwError(error);
      })
    );
  }
}

