import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    ProductdetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
