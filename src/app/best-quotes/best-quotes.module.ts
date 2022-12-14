import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestQuotesComponent } from './components/best-quotes/best-quotes.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BestQuotesComponent,
  ],
  imports: [
    CommonModule, BrowserModule, FormsModule
  ]
})
export class BestQuotesModule { }
