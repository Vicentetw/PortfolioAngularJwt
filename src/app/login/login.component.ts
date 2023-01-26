import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../entidades/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  userName!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;
  

 constructor(private authService: AuthService, private tokenService: TokenService, private router: Router){ }
ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
    /*this.router.navigate(['portfolio'])*/
  }
}
onLogin(): void{
  this.loginUsuario = new LoginUsuario(this.userName, this.password); 
  this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.userName);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['/'])
      
    }, err =>{
      
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
      
      
      
      
    })
    
}
  //logout y redirect to login
  logout(){
    this.tokenService.logOut() ;
    window.location.reload();
    this.router.navigate(['login']);
  }


}
