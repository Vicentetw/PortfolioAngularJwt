import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
URL = environment.apiUrl + 'auth/';

  constructor(private httpClient: HttpClient) { }

public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
  return this.httpClient.post<any>(this.URL +'nuevo', nuevoUsuario);
}

public login(loginUsuario: loginUsuario): Observable<JwtDto>{
  return this.httpClient.post<JwtDTO>(this.URL + 'login', loginUsuario); 
}

}
