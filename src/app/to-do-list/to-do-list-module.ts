import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDoComponent } from './components/to-do/to-do.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ToDoComponent],
  exports: []
})
export class ToDoListModule { }