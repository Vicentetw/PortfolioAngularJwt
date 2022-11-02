import { Component, OnInit } from '@angular/core';
//import data from 'src\assets\data\persona.json';
//import { PersonaService } from "src/app/services/persona.service";


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title = 'Perrotta Vicente';
  subtitle =' Full Stack Developer';
  exp = 'Experiencia';
  edu ='Educación';
  hys = 'Hard & Soft Skills';
  proy ='Proyectos';
  constructor( ){
    
  }

  ngOnInit(): void {
  }

}

/* esto lo traigo de app.component migrè todo a para separar portfolio de login y lo manejo desde app-routing.module.ts
import { Component } from '@angular/core';
import data from 'src\assets\data\persona.json';
import { ApicallService } from './services/apicall.service';
import persona from '*../../src/assets/data/persona.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perrotta Vicente';
  subtitle =' Full Stack Developer';
  exp = 'Experiencia';
  edu ='Educación';
  hys = 'Hard & Soft Skills';
  proy ='Proyectos';
  constructor(public apiCall:ApicallService){
    
  }
}
*/