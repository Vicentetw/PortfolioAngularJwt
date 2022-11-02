import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
experiencia: any
private apiHerokuUrl = environment.apiUrl;
  url:string="https://floating-chamber-24100.herokuapp.com/";


  constructor(private http: HttpClient) { }

  obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiHerokuUrl}experiencia/todas`);
  }

  public addExperiencia(experiencia:Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.apiHerokuUrl}experiencia`, experiencia);
  }

  modificarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.apiHerokuUrl + "experiencia/update", experiencia);
  }

  public borrarExperiencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiHerokuUrl}experiencia/${id}`);
  }

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiHerokuUrl}experiencia/todas`);
  }
 
  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.apiHerokuUrl}modifica/experiencia`, experiencia);
  } 
  
  public obtenerUnaExperiencia(){
    return this.http.get<any>(this.apiHerokuUrl + "experiencia/1")
}



}
