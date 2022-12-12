import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { ModificaExperienciaComponent } from './components/modifica-experiencia/modifica-experiencia.component';
import { ModificaSkillComponent } from './components/modifica-skill/modifica-skill.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'portfolio', component: PortfolioComponent},
   {path: 'modifica', component: ModificaComponent},
  {path: 'modifica-skill', component: ModificaSkillComponent},
  {path: 'modifica-experiencia', component: ModificaExperienciaComponent},
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path: ' ', component: Error404Component },
  {path: '**', component: Error404Component},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }