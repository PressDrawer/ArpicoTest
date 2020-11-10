import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomerService } from './customer.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
//import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
