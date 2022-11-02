import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-skill-button',
  templateUrl: './edit-skill-button.component.html',
  styleUrls: ['./edit-skill-button.component.css']
})
export class EditSkillButtonComponent implements OnInit {

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }
  Editar(){
    if (this.authService.estaLogeado)
    this.authService.router.navigate(['modifica-skill']);
    else{
      this.authService.router.navigate(['login']);
    }
  }
}
