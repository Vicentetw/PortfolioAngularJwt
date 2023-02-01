import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { ModificaExperienciaComponent } from './components/modifica-experiencia/modifica-experiencia.component';
import { ModificaSkillComponent } from './components/modifica-skill/modifica-skill.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { GuardService as guard } from './services/guard.service';



const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'portfolio', component: PortfolioComponent},
   {path: 'modifica', component: ModificaComponent, canActivate:[guard], data: {expectedRole: ['admin']}},
  //{path: 'modifica-skill', component: ModificaSkillComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}},
  {path: 'modifica-skill', component: ModificaSkillComponent, canActivate:[guard], data: {expectedRole: ['admin']}},
  {path: 'modifica-experiencia', component: ModificaExperienciaComponent, canActivate:[guard], data: {expectedRole: ['admin']}},
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: ' ', component: Error404Component },
  {path: '**', component: Error404Component},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }