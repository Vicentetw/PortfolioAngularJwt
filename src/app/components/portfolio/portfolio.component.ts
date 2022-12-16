import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title = 'Perrotta Vicente';
  subtitle =' Full Stack Developer';
  exp = 'Experiencia';
  edu ='Educación';
  hys = 'Hard & Soft Skills';
  proy ='Proyectos';
  roles!: string[];
  isAdmin:boolean =false;
  isLogged = false;
  nombreUsuario ='';

  constructor(private tokenService: TokenService, private authService: AuthService,public router: Router ){
    
  }

  ngOnInit(): void {
    /*
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role =>{
      if(role === 'ROLE_ADMIN'){
        this.isAdmin = true;
        console.log("El usuario es admin")
      } else
      console.log("El usuario NO ES admin")
      this.router.navigate(['portfolio'])
    })
    */
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }
  logout(){
    this.tokenService.logOut() ;
    window.location.reload();
    this.router.navigate(['login']);
  }
}

