import { Component, OnInit } from '@angular/core';
//import { PersonaService } from 'src/app/services/persona.service';

//import "angular/material/prebuilt-themes/indigo-pink.css";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

public persona: any

  //constructor(private service:PersonaService) { }
  constructor(){}  
  ngOnInit(): void {
    //this.service.obtenerPersona().subscribe{
    //  (data)=>
    //    this.persona = data
   // }
    }
  }


