import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { DemandeFormComponent } from './demande-form/demande-form.component';
import { DemandesComponent } from './demandes/demandes.component';
import  { DemandeDetailComponent } from './demande-detail/demande-detail.component';


const routes : Routes = [

  {path: 'login', component : LoginComponent},
  {path: 'demande-form', component : DemandeFormComponent},
  {path: 'demandes', component : DemandesComponent},
  {path: 'demandes/:_id', component : DemandeDetailComponent},
  {path : 'register', component : RegisterComponent}

];



@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
