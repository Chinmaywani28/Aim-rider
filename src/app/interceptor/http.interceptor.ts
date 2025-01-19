import { HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../enviorments/enviorment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  if(!req.url.startsWith('http')){
    const apiReq = req.clone({
      url: `${environment.apiUrl}${req.url}`
    })

    return next(apiReq)
  }

  console.log('rrr', req)
  return next(req);
};
