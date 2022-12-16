import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  roles: string[] = [];
  errMsj!: string;
  isLogged = false;
  isLogginFail = false;
  constructor(private router: Router, public authService: AuthService, public tokenService: TokenService) {
    

  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  ruta() {

    this.router.navigate(['login']);

  }
  
  
  Salir() {
    this.tokenService.logOut() ;
    window.location.reload();
    this.router.navigate(['login']);
  }
}
