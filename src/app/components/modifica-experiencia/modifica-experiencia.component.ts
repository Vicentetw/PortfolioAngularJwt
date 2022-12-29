import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidades/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-modifica-experiencia',
  templateUrl: './modifica-experiencia.component.html',
  styleUrls: ['./modifica-experiencia.component.css'],
  providers:[ExperienciaService]
})
export class ModificaExperienciaComponent implements OnInit {
  roles!:string[];
  public experienciaList: Experiencia[] = [];
  experienciaForm!: FormGroup;
  isAdmin:boolean =false;
  public editExperiencia!: Experiencia;
  public deleteExperiencia!: Experiencia;
  constructor(public authService: AuthService, private tokenService:TokenService,private experienciaService: ExperienciaService ,ngbConfig: NgbConfig) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(role=>{
      if(role ==='ROLE_ADMIN'){
        this.isAdmin=true;
      }
    })
    
    this.getExperiencia();
  }
/***********Experiencia inicio ***************/
public getExperiencia(): void {
  this.experienciaService.getExperiencia().subscribe(
    (response:Experiencia[]) => {
      this.experienciaList = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onAddExperiencia(addForm2: NgForm):void {
  document.getElementById('add-experiencia-modal')?.click();
  this.experienciaService.addExperiencia(addForm2.value).subscribe(
    (response: Experiencia) => {
      console.log(response);
      this.getExperiencia();
      addForm2.reset();
      alert("Experiencia ha sido agregada correctamente");
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm2.reset();
    }
  )
  
} 



public onUpdateExperiencia(experiencia: Experiencia):void {
this.experienciaService.updateExperiencia(experiencia).subscribe(
(response: Experiencia) => {
  console.log(response);
  this.getExperiencia();
  alert("Experiencia ha sido actualizada correctamente");
  
},
(error: HttpErrorResponse) => {
  alert(error.message);
}
)

}

public onDeleteExperiencia(id: number):void {
this.experienciaService.borrarExperiencia(id).subscribe(
(response: void) => {
  console.log(response);
  this.getExperiencia();
  alert("Experiencia eliminada correctamente");
  
},
(error: HttpErrorResponse) => {
  console.log(error.message);
}
)

}


public onOpenExperiencia(experiencia: Experiencia, mode: string): void{
  /******poner main-container****/
const container = document.getElementById('main-container');
const button = document.createElement('button');
button.type = 'button2';
button.style.display = 'none';
button.setAttribute('data-toggle', 'modal');
if (mode === 'add') {
  button.setAttribute('data-target', '#addExperienciaModal');
}
if (mode === 'edit') {
  this.editExperiencia = experiencia;
  button.setAttribute('data-target', '#updateExperienciaModal');
}
if (mode === 'delete') {
  this.deleteExperiencia = experiencia;
  button.setAttribute('data-target', '#deleteExperienciaModal');
}
container?.appendChild(button);
button.click();
}

/***************Fin Experiencia **************/
}
