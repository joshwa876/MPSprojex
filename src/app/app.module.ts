import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdMenuModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdDialogModule,
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
//import { AppRoutingModule, routingComponents } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
   // AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    //FlexLayoutModule,
    MdButtonModule,
  MdMenuModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
