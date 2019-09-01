import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'one', loadChildren: './one/one.module#OneModule', 
  canActivate:[UserGuard]},
  {path: 'two', loadChildren: './two/two.module#TwoModule',
  canActivate:[AdminGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
