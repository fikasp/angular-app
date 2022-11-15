import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoComponent } from './to-do-list/components/to-do/to-do.component';

import { S07InterpolationComponent } from './examples/s07-interpolation/s07-interpolation.component';
import { S08PipesComponent } from './examples/s08-pipes/s08-pipes.component';
import { S09QuestionMarkComponent } from './examples/s09-question-mark/s09-question-mark.component';
import { S10NgForComponent } from './examples/s10-ng-for/s10-ng-for.component';

const routes: Routes = [
    {path: '', component: ToDoComponent},
    {path: '00', component: ToDoComponent},
    {path: '07', component: S07InterpolationComponent},
    {path: '08', component: S08PipesComponent},
    {path: '09', component: S09QuestionMarkComponent},
    {path: '10', component: S10NgForComponent},
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
