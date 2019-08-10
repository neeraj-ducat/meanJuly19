import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewempComponent } from './newemp/newemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';

const routes: Routes = [
  {path: '', redirectTo: 'new', pathMatch: 'full'},
  {path: 'new', component: NewempComponent},
  {path: 'view', component: ViewempComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
