import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule}from './material/material.module';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';




@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent,
    CustomerDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
   
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
