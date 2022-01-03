import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {  ViwerjsAngModule } from "viwerjs-ang";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ViwerjsAngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
