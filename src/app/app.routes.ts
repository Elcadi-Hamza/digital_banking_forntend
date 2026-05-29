import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers";
import {AccountsComponent} from "./accounts/accounts";
import {NewCustomerComponent} from "./new-customer/new-customer";
import {CustomerAccountsComponent} from "./customer-accounts/customer-accounts";

const routes: Routes = [
  { path :"customers", component : CustomersComponent},
  { path :"accounts", component : AccountsComponent},
  { path :"new-customer", component : NewCustomerComponent},
  { path :"customer-accounts/:id", component : CustomerAccountsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }