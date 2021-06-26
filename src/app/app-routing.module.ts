import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [

  { path: 'customer', component: CustomerListComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'update-customer/:id', component: UpdateCustomerComponent},
  { path: 'customer-details/:id', component: ViewCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
