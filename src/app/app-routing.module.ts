import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoComponent } from './to-do-list/components/to-do/to-do.component';

import { S07InterpolationComponent } from './examples/s07-interpolation/s07-interpolation.component';
import { S08PipesComponent } from './examples/s08-pipes/s08-pipes.component';
import { S09QuestionMarkComponent } from './examples/s09-question-mark/s09-question-mark.component';
import { S10NgForComponent } from './examples/s10-ng-for/s10-ng-for.component';
import { S11DataBindingComponent } from './examples/s11-data-binding/s11-data-binding.component';
import { S12EventBindingComponent } from './examples/s12-event-binding/s12-event-binding.component';
import { S13TemplateReferenceComponent } from './examples/s13-template-reference/s13-template-reference.component';
import { S14PropertyBindingComponent } from './examples/s14-property-binding/s14-property-binding.component';

const routes: Routes = [
    {path: '', component: ToDoComponent},
    {path: '00', component: ToDoComponent},
    {path: '07', component: S07InterpolationComponent},
    {path: '08', component: S08PipesComponent},
    {path: '09', component: S09QuestionMarkComponent},
    {path: '10', component: S10NgForComponent},
    {path: '11', component: S11DataBindingComponent},
    {path: '12', component: S12EventBindingComponent},
    {path: '13', component: S13TemplateReferenceComponent},
    {path: '14', component: S14PropertyBindingComponent},
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
