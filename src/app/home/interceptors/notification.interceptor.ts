import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    /**对响应内容进行拦截 */
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse
          && event.status >= 200 && event.status < 300){
            console.log('请求成功！')
      }
    }));
  }
}