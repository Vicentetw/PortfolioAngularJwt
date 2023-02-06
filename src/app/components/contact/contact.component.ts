import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { LoginComponent } from 'src/app/login/login.component';
import { Config } from 'firebase/auth';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[PersonaService],
})
export class ContactComponent implements OnInit {
//public persona= {nombre:"hardcoded", apellido:"Perrotta"}
public persona: any
email="perrottavicente@gmail.com"

  constructor(private service:PersonaService) { 
     
   }

  ngOnInit(): void {
    this.service.obtenerUnaPersona().subscribe(data => {
      this.persona=data;
     // console.log('Data ', data);
    })
  }
  }


