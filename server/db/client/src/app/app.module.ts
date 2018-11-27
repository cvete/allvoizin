import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { MembresService } from './liste-membres/membres.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeMembresComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [MembresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
