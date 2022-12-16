import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../entidades/skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
skill:any
private apiHerokuUrl = environment.apiUrl;
  url:string="https://portfolio-perrottavicente.koyeb.app/";

  constructor(private http: HttpClient) { }
  obtenerDatosSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiHerokuUrl}skill/todas`);
  }

  public addSkill(skill:Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiHerokuUrl}skill`, skill);
  }

  modificarSkill(skill: Skill): Observable<any> {
    return this.http.put<any>(this.apiHerokuUrl + "skill/update", skill);
  }

  public borrarSkill(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiHerokuUrl}skill/${id}`);
  }

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiHerokuUrl}skill/todas`);
  }
 
  public updateSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiHerokuUrl}modifica/skill`, skill);
  } 
  
  public obtenerUnaSkill(){
    return this.http.get<any>(this.apiHerokuUrl + "skill/1")
}



}
