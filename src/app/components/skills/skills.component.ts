import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';
import { SkillService } from 'src/app/services/skill.service';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers:[SkillService]
})
export class SkillsComponent implements OnInit {
  public skill: Skill[] = [];

  constructor(private skService:SkillService) { }

  ngOnInit(): void {
    this.skService.obtenerDatosSkill().subscribe(datask => {
      this.skill=datask;
      console.log('DataSkill ', datask);
    })
  }
  

}
