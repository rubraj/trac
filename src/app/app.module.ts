import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { ExistingCustomerComponent } from './components/existing-customer/existing-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCustomerComponent,
    ExistingCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'home', component:HomeComponent},
      {path: 'newCustomer', component:NewCustomerComponent},
      {path: 'existingCustomer', component:ExistingCustomerComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
