import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from 'src/add-form/add-form.component';
import { CustomerComponent } from 'src/customer/customer.component';
import { ProductComponent } from 'src/product/product.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'addCustomer', component: AddFormComponent },
  { path: '**', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }