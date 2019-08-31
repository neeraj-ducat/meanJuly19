import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { RatingsComponent } from './ratings/ratings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';


const routes:Route[] = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent,
   children: [
    {path:'', redirectTo: 'review', pathMatch: 'full'},
    {path:'review', component:ReviewComponent},
    {path:'rating', component:RatingsComponent}
   ]
  }
];

@NgModule({
  declarations: [ReviewComponent, RatingsComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TwoModule { }
