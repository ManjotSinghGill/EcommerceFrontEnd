import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PartnerloginComponent } from './partnerlogin/partnerlogin.component';
import { PartnerprofileComponent } from './partnerprofile/partnerprofile.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'productdetail/:id', component: ProductdetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'addproduct', component: AddproductComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'partnerprofile', component: PartnerprofileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'partnerlogin', component: PartnerloginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
