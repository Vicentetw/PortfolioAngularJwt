import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import {ExperienceComponent} from './components/experience/experience.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ModificaComponent } from './components/modifica/modifica.component';
import { EditButtonComponent } from './botones/edit-button/edit-button.component';
import { ModificaSkillComponent } from './components/modifica-skill/modifica-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditSkillButtonComponent } from './botones/edit-skill-button/edit-skill-button.component';
import { EditExperienciaButtonComponent } from './botones/edit-experiencia-button/edit-experiencia-button.component';
import { HomeButtonComponent } from './botones/home-button/home-button.component';
import { ModificaExperienciaComponent } from './components/modifica-experiencia/modifica-experiencia.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { InterceptorService } from './services/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HeaderComponent,
    ExperienceComponent,
    AcercaComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    ModificaComponent,
    EditButtonComponent,
    ModificaSkillComponent,
    EditSkillButtonComponent,
    EditExperienciaButtonComponent,
    HomeButtonComponent,
    ModificaExperienciaComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgCircleProgressModule.forRoot({
      
    })
  ],
  providers: [
    InterceptorService
  ],
  //componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }