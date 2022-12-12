import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent implements OnInit {

  constructor(public authService: AuthService, public router :Router) { }

  ngOnInit(): void {
    
  }
home(){
  this.router.navigate(['portfolio']);
}
}
