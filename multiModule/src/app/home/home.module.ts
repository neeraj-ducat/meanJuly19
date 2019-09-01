import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Route[] = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent,
  children: [
    {path:'', redirectTo: 'intro', pathMatch: 'full'},
    {path:'intro', component:IntroComponent}
  ]

  },
  
];
@NgModule({
  declarations: [IntroComponent, DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
