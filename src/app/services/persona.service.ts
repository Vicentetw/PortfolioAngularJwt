import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  private apiHerokuUrl = environment.apiUrl;
  persona: any;
  cargada = false;
  url:string="https://portfolio-perrottavicente.koyeb.app/";
  
  constructor(private http:HttpClient) {
    //console.log("El servicio está corriendo");
   }

  public obtenerDatosPersona(id:number):Observable<Persona>{
   return this.http.get<Persona>(this.url+"/"+id);
  }
  public getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiHerokuUrl}/personas/all`);
  }

  public editarDatosPersona(persona:Persona):Observable<any>{
    return  this.http.put(this.url,persona);
  }
  public obtenerUnaPersona(){
   return this.http.get<any>(this.apiHerokuUrl + "persona/1")
    
  }
 
}
