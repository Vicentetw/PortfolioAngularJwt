import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { TokenService } from 'src/app/services/token.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers:[ExperienciaService]
})
export class ExperienceComponent implements OnInit {
  exp = 'Experiencia';
  public experiencia: Experiencia[] = [];
  realRole?: string;
  isAdmin:boolean = false;
  

  constructor(private expService:ExperienciaService, private tokenService : TokenService) { }

  ngOnInit(): void {
    this.expService.obtenerDatosExperiencia().subscribe(dataexp => {
      this.experiencia=dataexp;
      //console.log('Data2 ', dataexp);
    })
    this.getRol();
    //console.log("is admin en experiencia?: " + this.isAdmin)
   //this.cargarExperiencia();
   }

  
  cargarExperiencia():void{
    this.expService.obtenerDatosExperiencia().subscribe(
     dataexp => {
    this.experiencia=dataexp;
     }
    )
}

getRol(){
  const roles = this.tokenService.getAuthorities();
    this.realRole = 'user';
    roles.forEach(role =>{
      if(role === 'ROLE_ADMIN'){
        this.realRole = 'admin';
        this.isAdmin = true;
      }
    });

  }
  
  /*getRol(){
    //pobner akgi
  }
  */
}
