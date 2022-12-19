import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { GuardService } from 'src/app/services/guard.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  
  roles: Array<string> =[];
  isAdmin:boolean =false;
  isLogged = false;
  
  constructor(
    private guard: GuardService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities(); 
      this.roles.forEach(role => {
        if(role ==='ROLE_ADMIN'){
          this.isAdmin = true;
          console.log('en edit el rol es:  ' + this.isAdmin)
        
        }else{
          this.isAdmin = false;
        
        }
      })
            
    
    
  }
  Editar() {
    if (this.isAdmin)
      this.router.navigate(['modifica']);
    else {
      this.router.navigate(['login']);
    }
    
  }
}
