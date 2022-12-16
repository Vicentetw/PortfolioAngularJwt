import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../entidades/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;

 constructor(public authService: AuthService, public tokenService: TokenService, public router: Router){ }
ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
    this.router.navigate(['portfolio'])
  }
}
onLogin(): void{
  this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
  this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['portfolio'])
      
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
