import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { SelectorPaisComponentComponent } from './components/selector-pais-component/selector-pais-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorPaisComponentComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
HttpClientModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
