import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { S09QuestionMarkComponent } from './s09-question-mark/s09-question-mark.component';
import { S09DogNameComponent } from './s09-question-mark/dog-name/dog-name.component';
import { S10NgForComponent } from './s10-ng-for/s10-ng-for.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [S09DogNameComponent, S09QuestionMarkComponent, S10NgForComponent],
  exports: [S09DogNameComponent, S09QuestionMarkComponent, S10NgForComponent]
})
export class ExamplesModule { }