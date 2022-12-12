import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }
  Editar() {
    if (this.authService.estaLogeado)
      this.router.navigate(['modifica']);
    else {
      this.router.navigate(['login']);
    }
    
  }
}
