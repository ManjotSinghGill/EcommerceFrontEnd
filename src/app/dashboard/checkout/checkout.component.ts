import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private http: HttpClient) { }
  cart: any = JSON.parse(localStorage.getItem('cart')!);

  ngOnInit(): void {
  }

  

  checkout(){

    let body: any= {
      'CUST_ID': this.cart.userid,
      'TXN_AMOUNT': String(this.cart.total_price),
      'ORDER_ID': String(Math.random())
    }

    let url = 'http://localhost:8080/api/controller/paymentGateway';
  }

}
