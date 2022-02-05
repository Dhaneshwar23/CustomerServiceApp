import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class CustomerModule { }
