import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers:[ExperienciaService]
})
export class ExperienceComponent implements OnInit {
  exp = 'Experiencia';
  public experiencia: Experiencia[] = [];
  
  constructor(public authService: AuthService, private expService:ExperienciaService, private tokenService:TokenService) { }
isLogged= false;
  ngOnInit(): void {
    if(this.tokenService.getToken()){
    this.expService.obtenerDatosExperiencia().subscribe(dataexp => {
      this.experiencia=dataexp;
      console.log('DataExperiencia ', dataexp);
    
    })
  }else
  {
    this.isLogged = false;
  }
  }
  
}
