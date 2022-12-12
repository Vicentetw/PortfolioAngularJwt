import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-skill-button',
  templateUrl: './edit-skill-button.component.html',
  styleUrls: ['./edit-skill-button.component.css']
})
export class EditSkillButtonComponent implements OnInit {

  constructor( public authService: AuthService, public router :Router) { }

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
