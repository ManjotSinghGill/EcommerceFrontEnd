import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any;
  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem("cart")!);
  }

  removeCartItem(item: any){
    for( var i = 0; i < this.cart.listofItems.length; i++){
      if(this.cart.listofItems[i] == "item"){
        this.cart.listofItems.splice(i, 1);
        localStorage.setItem("cart", this.cart);
        this.ngOnInit();
      }
    }
  }
  

}
