import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';



const routes: Routes = [{
  path: 'Customerss/:customerid',
  component: CustomerDetailsComponent
},
{
  path: '',
  component: CustomerViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
