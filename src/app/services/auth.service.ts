import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { JwtDto } from '../entidades/jwt-dto';
import { LoginUsuario } from '../entidades/login-usuario';
import { NuevoUsuario } from '../entidades/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
URL = environment.apiUrl + 'auth/';
estaLogeado = false;

  constructor(
    private httpClient: HttpClient,
    private router:Router
    ) { }

public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
  return this.httpClient.post<any>(this.URL +'nuevo', nuevoUsuario);
}

public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
  return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario); 
}

 

}
