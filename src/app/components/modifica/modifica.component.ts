import { Component,Input, OnInit } from '@angular/core';


/*import { FormBuilder, FormGroup, Validators } from '@angular/forms';*/
import { EducacionService } from 'src/app/services/educacion.service';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/interfaces/Educacion'; 
import { TokenService } from 'src/app/services/token.service';
import { GuardService } from 'src/app/services/guard.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css'],
  providers:[EducacionService]
})
export class ModificaComponent implements OnInit {
  roles!:string[];
  public educacionList: Educacion[] =[];
  isAdmin:boolean =false;
  educacionForm!: FormGroup;
  public editEducacion!: Educacion;
  public deleteEducacion!: Educacion;
  isLogged = false;
  userName ='';
  realRole?: string;
  public educacion: Educacion[] =[];
  constructor(private tokenService: TokenService,ngbConfig:NgbConfig,private educacionService:EducacionService,private guard:GuardService) { 
  

  }

  ngOnInit():void {
   this.roles = this.tokenService.getAuthorities();
    this.getRoles();
    this.getEducacion();
    
    
        
 
  


}
    getRoles(){
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(role =>{
        if(role === 'ROLE_ADMIN'){
          this.isAdmin = true;
          console.log("El usuario es admin")
        } 
        
       
      });
      
      if(this.tokenService.getToken()) {
        this.isLogged = true;
        this.userName = this.tokenService.getUserName();
        
      } else {
        this.isLogged = false;
        this.userName = '';
      }
    }
  
    
/*************Educacion*************/
  public getEducacion2(): void {
    this.educacionService.getEducacion().subscribe(
    dataedu =>{
      this.educacionList=dataedu;
      
    }
      )
  }
  public getEducacion(): void {
    
    this.educacionService.obtenerDatosEducacion().subscribe(
      (response:Educacion[]) => {
        this.educacionList = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }
  public onAddEducacion(addForm: NgForm):void {
    document.getElementById('add-educacion-modal')?.click();
   
    this.educacionService.addEducacion(addForm.value).subscribe(
      (response: Educacion) => {
        console.log(response);
        console.log(addForm.value);
        this.getEducacion();
        addForm.reset();
        alert("Educacion ha sido agregada correctamente");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  } 
  


/*public onUpdateEducacion(addForm: NgForm):void {
  document.getElementById('update-educacion-modal')?.click();
  this.educacionService.updateEducacion(addForm.value).subscribe(
  (response: Educacion) => {
    console.log(response);
    this.getEducacion();
    alert("Educacion ha sido actualizada correctamente");
    
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
)

}
*/
public onUpdateEducacion(educacion: Educacion):void {
  this.educacionService.updateEducacion(educacion).subscribe(
  (response: Educacion) => {
    console.log(response);
    this.getEducacion();
    
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
)

}

public onDeleteEducacion(id: number):void {
  this.educacionService.borrarEducacion(id).subscribe(
  (response: void) => {
    console.log(response);
    this.getEducacion();
    alert("Educacion ha sido eliminada correctamente");
    
  },
  (error: HttpErrorResponse) => {
    console.log(error.message);
  }
)

}


public onOpenModal(educacion: Educacion, mode: string): void{
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addEducacionModal');
  }
  if (mode === 'edit') {
    this.editEducacion = educacion;
    button.setAttribute('data-target', '#updateEducacionModal');
  }
  if (mode === 'delete') {
    this.deleteEducacion = educacion;
    button.setAttribute('data-target', '#deleteEducacionModal');
  }
  container?.appendChild(button);
  button.click();
}

/************* Fin Educacion*************/




}
