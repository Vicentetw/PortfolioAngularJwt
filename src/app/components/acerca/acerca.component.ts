import { Component, NgModule, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/entidades/persona';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
name = 'Perrotta Vicente';
iam =' Full Stack Developer';
  public persona:any
  
  
constructor(public authService: AuthService){}  

ngOnInit(): void {

  }

}
