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

  constructor(private router: Router, public authService: AuthService, public tokenService: TokenService) {
    

  }

  ngOnInit(): void {
  }
  ruta() {

    this.router.navigate(['login']);

  }
  
  
  Salir() {
    this.tokenService.logOut();
    
  }
}
