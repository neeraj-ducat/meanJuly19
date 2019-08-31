import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';

const routes:Route[] = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent,
   children: [
    {path:'', redirectTo: 'order', pathMatch: 'full'},
    {path:'order', component:OrderComponent},
    {path:'product', component:ProductComponent}
   ]
  },
];

@NgModule({
  declarations: [ProductComponent, OrderComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OneModule { }
