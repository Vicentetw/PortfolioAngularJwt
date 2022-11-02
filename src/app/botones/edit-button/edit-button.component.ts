import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  Editar() {
    if (this.authService.estaLogeado)
      this.authService.router.navigate(['modifica']);
    else {
      this.authService.router.navigate(['login']);
    }
  }
}
