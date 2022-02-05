import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerAppService } from 'src/services/customer-app.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    CustomerAppService
  ]
})
export class AddFormModule { }
