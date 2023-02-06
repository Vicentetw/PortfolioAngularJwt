import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SkillService } from 'src/app/services/skill.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers:[SkillService]
})
export class SkillsComponent implements OnInit {
  public skill: Skill[] = [];
  realRole?: string;
  isAdmin:boolean = false;
  constructor(private skService:SkillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.skService.obtenerDatosSkill().subscribe(datask => {
      this.skill=datask;
      //console.log('DataSkill ', datask);
    })
    this.getRol();
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
