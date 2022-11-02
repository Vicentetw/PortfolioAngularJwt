import { Component,Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SkillService } from 'src/app/services/skill.service';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/entidades/skill';
import { NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modifica-skill',
  templateUrl: './modifica-skill.component.html',
  styleUrls: ['./modifica-skill.component.css'],
  providers:[SkillService]
})
export class ModificaSkillComponent implements OnInit {
  public skillList: Skill[] = [];
  isUserLogged!:boolean
  skillForm!: FormGroup;
  public editSkill!: Skill;
  public deleteSkill!: Skill;
  
  constructor(public authService: AuthService, private skillService: SkillService ,ngbConfig: NgbConfig) { 

  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.estaLogeado;
    this.getSkill();
  }
/***********Skill inicio ***************/
public getSkill(): void {
  this.skillService.getSkill().subscribe(
    (response:Skill[]) => {
      this.skillList = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onAddSkill(addForm2: NgForm):void {
  document.getElementById('add-skill-modal')?.click();
  this.skillService.addSkill(addForm2.value).subscribe(
    (response: Skill) => {
      console.log(response);
      this.getSkill();
      addForm2.reset();
      alert("Skill ha sido agregada correctamente");
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm2.reset();
    }
  )
  
} 



public onUpdateSkill(skill: Skill):void {
this.skillService.updateSkill(skill).subscribe(
(response: Skill) => {
  console.log(response);
  this.getSkill();
  alert("Skill ha sido actualizada correctamente");
  
},
(error: HttpErrorResponse) => {
  alert(error.message);
}
)

}

public onDeleteSkill(id: number):void {
this.skillService.borrarSkill(id).subscribe(
(response: void) => {
  console.log(response);
  this.getSkill();
  alert("Skill eliminada correctamente");
  
},
(error: HttpErrorResponse) => {
  console.log(error.message);
}
)

}


public onOpenSkill(skill: Skill, mode: string): void{
  /******poner main-container****/
const container = document.getElementById('main-container');
const button = document.createElement('button');
button.type = 'button2';
button.style.display = 'none';
button.setAttribute('data-toggle', 'modal');
if (mode === 'add') {
  button.setAttribute('data-target', '#addSkillModal');
}
if (mode === 'edit') {
  this.editSkill = skill;
  button.setAttribute('data-target', '#updateSkillModal');
}
if (mode === 'delete') {
  this.deleteSkill = skill;
  button.setAttribute('data-target', '#deleteSkillModal');
}
container?.appendChild(button);
button.click();
}

/***************Fin Skill **************/
}
