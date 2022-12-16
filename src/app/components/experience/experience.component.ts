import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/interfaces/experiencia';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers:[ExperienciaService]
})
export class ExperienceComponent implements OnInit {
  exp = 'Experiencia';
  public experiencia: Experiencia[] = [];
  
  

  constructor(private expService:ExperienciaService) { }

  ngOnInit(): void {
    this.expService.obtenerDatosExperiencia().subscribe(dataexp => {
      this.experiencia=dataexp;
      console.log('Data2 ', dataexp);
    })
   this.cargarExperiencia();
   }

  
  cargarExperiencia():void{
    this.expService.obtenerDatosExperiencia().subscribe(
     dataexp => {
    this.experiencia=dataexp;
     }
    )
}
}
