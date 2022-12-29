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
  nombreUsuario ='';
    constructor(
    private guard: GuardService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.getRoles();   
    
    
    
  }
  Editar() {
       this.router.navigate(['modifica']);
  }
  getRoles2(){
    this.roles = this.tokenService.getAuthorities(); 
    this.roles.forEach(role => {
      if(role ==='ROLE_ADMIN'){
        this.isAdmin = true;
        
      
      }else{
        this.isAdmin = false;
      
      }
    })
  }
  getRoles(){
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role =>{
      if(role === 'ROLE_ADMIN'){
        this.isAdmin = true;
        console.log("El usuario es admin")
      } else
      this.isAdmin = false;
      console.log("El usuario NO ES admin")
      this.router.navigate(['portfolio'])
    });
    
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
      
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }
  }

