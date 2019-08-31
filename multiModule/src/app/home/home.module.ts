import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';

const routes:Route[] = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent,
  children: [
    {path:'', redirectTo: 'intro', pathMatch: 'full'},
    {path:'intro', component:IntroComponent},
    {path:'report', component:ReportsComponent},
  ]

  },
  
];
@NgModule({
  declarations: [IntroComponent, ReportsComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
