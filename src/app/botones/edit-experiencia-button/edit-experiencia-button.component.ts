import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-experiencia-button',
  templateUrl: './edit-experiencia-button.component.html',
  styleUrls: ['./edit-experiencia-button.component.css']
})
export class EditExperienciaButtonComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

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
