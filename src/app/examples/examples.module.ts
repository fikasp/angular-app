import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S09QuestionMarkComponent } from './s09-question-mark/s09-question-mark.component';
import { S10NgForComponent } from './s10-ng-for/s10-ng-for.component';
import { DogNameComponent } from './s09-question-mark/dog-name/dog-name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DogNameComponent, S09QuestionMarkComponent, S10NgForComponent],
  exports: [S09QuestionMarkComponent, S10NgForComponent, DogNameComponent]
})
export class ExamplesModule { }