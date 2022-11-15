import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './components/to-do/to-do.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToDoComponent],
  exports: [ToDoComponent]
})
export class ToDoListModule { }