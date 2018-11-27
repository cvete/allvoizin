import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import {Membres} from './membres/membres.component';

@NgModule({
  declarations: [
    AppComponent, Membres
  ],
  imports: [
    BrowserModule, HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
