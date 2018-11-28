import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { DemandesComponent } from './demandes/demandes.component';

const routes : Routes = [

  {path: 'login', component : LoginComponent},
  {path: 'liste-membres', component : ListeMembresComponent},
  {path: 'demandes', component : DemandesComponent},
  {path : 'register', component : RegisterComponent}

];



@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
