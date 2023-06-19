import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiKey =
      'live_Sluwxc8xSiEEpmIMHvWZIVgJEVZVci6jTS0AhDoWOOYnIptJ5JCHexIi7slmCDGy';
    const modifiedRequest = request.clone({
      setHeaders: {
        'X-API-Key': apiKey,
      },
    });

    return next.handle(modifiedRequest);
  }
}
