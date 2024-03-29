import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpInterceptor } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    //intercept(request: HttpRequest<any>, next: HttpHandler){  
    
    let authReq = req;
    const token = this.tokenService.getToken();
    
    if(token != null){
        authReq = req.clone({
          //setHeaders:{
            //Athorization:`Bearer ${token}`
          //}  
          //headers: request.headers.set('Authorization', 'Bearer' + token),
         headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            //withCredentials:true,  
        
        });
       // return next.handle(intReq);
  
    }
   return next.handle(authReq);
   
}
}

export const interceptorProvider = [{
provide: HTTP_INTERCEPTORS,
useClass: InterceptorService,
multi: true },];
