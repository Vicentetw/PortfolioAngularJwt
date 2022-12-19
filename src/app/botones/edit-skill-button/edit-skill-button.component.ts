import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-edit-skill-button',
  templateUrl: './edit-skill-button.component.html',
  styleUrls: ['./edit-skill-button.component.css']
})
export class EditSkillButtonComponent implements OnInit {

  constructor( 
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
    ) { }

  roles!: string[];
  isAdmin:boolean =false;
  isLogged = false;
  
  ngOnInit(): void {
  }
  Editar(){
    if (this.authService.estaLogeado)
    this.router.navigate(['modifica-skill']);
    else{
      this.router.navigate(['login']);
    }
  }
}
