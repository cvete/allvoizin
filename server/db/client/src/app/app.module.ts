import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { MembresService } from './liste-membres/membres.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemandesComponent } from './demandes/demandes.component';
import { DemandesService } from './demandes/demandes.service';
import { DemandeDetailComponent } from './demande-detail/demande-detail.component';
import { DemandeFormComponent } from './demande-form/demande-form.component';
import { UserService } from './user.service';
import { LoginService } from './login/login.service';
import { ProfileComponent } from './profile/profile.component';
import { GeolocComponent } from './demande-detail/geoloc/geoloc.component';
import {HttpClient} from '@angular/common/http'; 
import {AgmCoreModule} from '@agm/core';  

@NgModule({
  declarations: [
    AppComponent,
    ListeMembresComponent,
    LoginComponent,
    RegisterComponent,
    DemandesComponent,
    DemandeDetailComponent,
    DemandeFormComponent,
    ProfileComponent,
    GeolocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjb1tKg0aiL5s8OaP464tT4y5fWI9QeSs'
    }),
    AppRoutingModule
  ],
  providers: [MembresService,DemandesService,UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
