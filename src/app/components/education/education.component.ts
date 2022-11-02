import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/interfaces/Educacion';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers:[EducacionService]
})
export class EducationComponent implements OnInit {

  public educacion: Educacion[] = [];

constructor(private eService:EducacionService) { 
     
 }

    
 ngOnInit(): void {
  this.eService.obtenerDatosEducacion().subscribe(data2 => {
    this.educacion=data2;
    console.log('Data2 ', data2);
  })
  
}


}
