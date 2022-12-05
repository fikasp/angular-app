import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S07InterpolationComponent } from './s07-interpolation/s07-interpolation.component';
import { S08PipesComponent } from './s08-pipes/s08-pipes.component';
import { S09QuestionMarkComponent } from './s09-question-mark/s09-question-mark.component';
import { S09DogNameComponent } from './s09-question-mark/dog-name/dog-name.component';
import { S10NgForComponent } from './s10-ng-for/s10-ng-for.component';
import { S11DataBindingComponent } from './s11-data-binding/s11-data-binding.component';
import { S12EventBindingComponent } from './s12-event-binding/s12-event-binding.component';
import { S13TemplateReferenceComponent } from './s13-template-reference/s13-template-reference.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    S07InterpolationComponent, 
    S08PipesComponent, 
    S09DogNameComponent, 
    S09QuestionMarkComponent, 
    S10NgForComponent,
    S11DataBindingComponent,
    S12EventBindingComponent,
    S13TemplateReferenceComponent,
  ],
  exports: []
})
export class ExamplesModule { }