import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-experiencia-button',
  templateUrl: './edit-experiencia-button.component.html',
  styleUrls: ['./edit-experiencia-button.component.css']
})
export class EditExperienciaButtonComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  Editar() {
    if (this.authService.estaLogeado)
      this.authService.router.navigate(['modifica-experiencia']);
    else {
      this.authService.router.navigate(['login']);
    }
  }
}
