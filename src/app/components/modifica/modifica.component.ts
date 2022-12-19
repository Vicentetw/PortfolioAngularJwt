import { Component,Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Educacion } from 'src/app/entidades/educacion';
/*import { FormBuilder, FormGroup, Validators } from '@angular/forms';*/
import { EducacionService } from 'src/app/services/educacion.service';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import { RolService } from 'src/app/services/rol.service';
import { GuardService } from 'src/app/services/guard.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css'],
  providers:[EducacionService]
})
export class ModificaComponent implements OnInit {
  
  public educacionList: Educacion[] = [];
  isAdmin:boolean =false;
   educacionForm!: FormGroup;
  public editEducacion!: Educacion;
  public deleteEducacion!: Educacion;
  

  constructor(private tokenService: TokenService,public authService: AuthService, private educacionService: EducacionService,ngbConfig: NgbConfig, private rol: RolService, private guard:GuardService) { 
   /* this.educacionForm = FormGroup.group(
      {
      id: [''],
      fecha_inicio: [''],
      fecha_egreso: ['', Validators.required],
      titulo: ['', Validators.required],
      institucion: ['', Validators.required],
      persona_id: ['', Validators.required],
    }
    );
    */

  }

  ngOnInit() {

    this.rol.getRol();
    this.tokenService.getAuthorities();
    this.getEducacion();
    console.log('******mi rol en modifica es:' + this.tokenService.roles);
    
  }
/*************Educacion*************/
  public getEducacion(): void {
    this.educacionService.getEducacion().subscribe(
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
  


public onUpdateEducacion(educacion: Educacion):void {
  this.educacionService.updateEducacion(educacion).subscribe(
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
