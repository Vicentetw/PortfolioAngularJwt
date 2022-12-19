import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-edit-experiencia-button',
  templateUrl: './edit-experiencia-button.component.html',
  styleUrls: ['./edit-experiencia-button.component.css']
})
export class EditExperienciaButtonComponent implements OnInit {
  roles!: string[];
  isAdmin:boolean =false;
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  Editar() {
    if (this.authService.estaLogeado)
      this.router.navigate(['modifica-experiencia']);
    else {
      this.router.navigate(['login']);
    }
  }
}
