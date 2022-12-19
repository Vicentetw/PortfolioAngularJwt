import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  isAdmin:boolean = false;
  constructor(private tokenService:TokenService) { }


  getRol(){
    const roles = this.tokenService.getAuthorities();
      
      roles.forEach(role =>{
        if(role === 'ROLE_ADMIN'){
          this.isAdmin = true;
        }
        
      });
  
    }
}
