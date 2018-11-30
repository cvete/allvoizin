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

@NgModule({
  declarations: [
    AppComponent,
    ListeMembresComponent,
    LoginComponent,
    RegisterComponent,
    DemandesComponent,
    DemandeDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MembresService,DemandesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
