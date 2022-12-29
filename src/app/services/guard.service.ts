import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  realRole?: string;

  constructor(private tokenService: TokenService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole =route.data['expectedRole'];
    const roles = this.tokenService.getAuthorities();
    this.realRole = 'user';
    roles.forEach(role =>{
      if(role === 'ROLE_ADMIN'){
        this.realRole = 'admin';
      }
    });
    if(!this.tokenService.getToken() || expectedRole.indexOf(this.realRole) === -1 ){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
