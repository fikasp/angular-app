import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S10NgForComponent } from './examples/s10-ng-for/s10-ng-for.component';
import { ToDoComponent } from './to-do-list/components/to-do/to-do.component';

const routes: Routes = [
    {path: '', component: ToDoComponent},
    {path: '', pathMatch: 'full', redirectTo: 'NazwaKomponentu'},
    {path: 'ngfor', component: S10NgForComponent},
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
