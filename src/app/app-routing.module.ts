import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoComponent } from './to-do-list/components/to-do/to-do.component';
import { BestQuotesComponent } from './best-quotes/components/best-quotes/best-quotes.component';

import { S07InterpolationComponent } from './examples/s07-interpolation/s07-interpolation.component';
import { S08PipesComponent } from './examples/s08-pipes/s08-pipes.component';
import { S09QuestionMarkComponent } from './examples/s09-question-mark/s09-question-mark.component';
import { S10NgForComponent } from './examples/s10-ng-for/s10-ng-for.component';
import { S11DataBindingComponent } from './examples/s11-data-binding/s11-data-binding.component';
import { S12EventBindingComponent } from './examples/s12-event-binding/s12-event-binding.component';
import { S13TemplateReferenceComponent } from './examples/s13-template-reference/s13-template-reference.component';
import { S14PropertyBindingComponent } from './examples/s14-property-binding/s14-property-binding.component';
import { S15TwoWayBindingComponent } from './examples/s15-two-way-binding/s15-two-way-binding.component';
import { S16NgIfComponent } from './examples/s16-ng-if/s16-ng-if.component';
import { S22EventEmitterComponent } from './examples/s22-event-emitter/s22-event-emitter.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '02'},
    {path: '01', component: ToDoComponent},
    {path: '02', component: BestQuotesComponent},
    {path: '10', component: S07InterpolationComponent},
    {path: '11', component: S09QuestionMarkComponent},
    {path: '12', component: S08PipesComponent},
    {path: '13', component: S10NgForComponent},
    {path: '14', component: S11DataBindingComponent},
    {path: '15', component: S12EventBindingComponent},
    {path: '16', component: S14PropertyBindingComponent},
    {path: '17', component: S15TwoWayBindingComponent},
    {path: '18', component: S13TemplateReferenceComponent},
    {path: '19', component: S16NgIfComponent},
    {path: '20', component: S22EventEmitterComponent},
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
