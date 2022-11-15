import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToDoListModule } from './to-do-list/to-do-list-module';
import { ExamplesModule } from './examples/examples.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ToDoListModule, ExamplesModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
