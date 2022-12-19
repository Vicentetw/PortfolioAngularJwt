import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/interfaces/Educacion';
import { GuardService } from 'src/app/services/guard.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers:[EducacionService]
})
export class EducationComponent implements OnInit {

  public educacion: Educacion[] = [];
  realRole?: string;
  isAdmin:boolean = false;
constructor(private eService:EducacionService, private guard:GuardService,private router: Router, private tokenService: TokenService) { 
     
 }

    
 ngOnInit(): void {
  this.getRol();
  this.eService.obtenerDatosEducacion().subscribe(data2 => {
    this.educacion=data2;
  
  })
  
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
}
