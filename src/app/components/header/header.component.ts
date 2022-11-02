import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) {
    console.log("USUARIO CONECTADO?: " + this.authService.estaLogeado);

  }

  ngOnInit(): void {
  }
  ruta() {

    this.router.navigate(['login']);

  }
  rutaemergente() {

    this.router.navigate(['portfolio']);

  }
  logueado() {
    this.authService.estaLogeado;
    console.log("Estado de logueado: " + this.authService.estaLogeado);
  }
  Salir() {
    this.authService.SignOut();
    console.log("Estado de logueado: " + this.authService.estaLogeado);
  }
}
