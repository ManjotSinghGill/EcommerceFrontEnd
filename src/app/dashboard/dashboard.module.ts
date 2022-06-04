import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PartnerprofileComponent } from './partnerprofile/partnerprofile.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    ProductdetailComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AddproductComponent,
    UserprofileComponent,
    PartnerprofileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
