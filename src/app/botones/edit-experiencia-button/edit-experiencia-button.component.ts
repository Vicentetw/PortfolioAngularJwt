import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';
import { GuardService } from 'src/app/services/guard.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-edit-experiencia-button',
  templateUrl: './edit-experiencia-button.component.html',
  styleUrls: ['./edit-experiencia-button.component.css']
})
export class EditExperienciaButtonComponent implements OnInit {
  roles: Array<string> =[];
  isAdmin:boolean =false;
  isLogged = false;

  constructor(
    private guard: GuardService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.getRoles();
          
  }
  Editar() {
  this.router.navigate(['modifica-experiencia']);
  }
  getRoles(){
    this.roles = this.tokenService.getAuthorities(); 
    this.roles.forEach(role => {
      if(role ==='ROLE_ADMIN'){
        this.isAdmin = true;
        
      
      }else{
        this.isAdmin = false;
      
      }
    })
  }
}
