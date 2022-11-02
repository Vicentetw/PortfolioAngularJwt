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
  url:string="https://floating-chamber-24100.herokuapp.com";
  
  constructor(private http:HttpClient) {
    console.log("El servicio está corriendo");
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
    // return this.http.get("http://localhost:8080/persona/1")
    //el get devuelve un obserbable
    //y el service me va a devolver un observable
  }
 
}
/**
  persona: any;
  cargada = false;

  public contentfilpere: string = '';
  constructor(private http: HttpClient) { }


  public getTodos(): Observable<any> {

    //return this.http.get('../../assets/data/persona.json');
    return this.http.get('http://localhost:8080/persona/1');

  }
  getJson(url: string) {
    return this.http.get(url);
  }
  public obtenerPersona() {
    return this.http.get("http://localhost:8080/persona/1");
    //get devuelve un objeto llamado Observable al cuál nos podemos subscribir desde el componente.ts dentro de ngOnInit(): void {acá va} quedando a la espera por retrasos
  }
 */