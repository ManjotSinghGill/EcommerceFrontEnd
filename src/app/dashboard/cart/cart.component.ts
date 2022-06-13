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
    var index = this.cart.listOfItems.indexOf(item);
    if(index !== -1){
      this.cart.total_price = this.cart.total_price - (this.cart.listOfItems[index].count * this.cart.listOfItems[index].price); 
      this.cart.listOfItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.ngOnInit();
      window.alert("Item has been removed!")
    }
  }
  

  increment(item: any){
    var index = this.cart.listOfItems.indexOf(item);
    if(index != -1){
      this.cart.listOfItems[index].count +=1
      this.cart.total_price += item.price;
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.ngOnInit();
      return;
    }
  }

  decrement(item: any){
    var index = this.cart.listOfItems.indexOf(item);
    if(index != -1){
      this.cart.listOfItems[index].count -=1
      this.cart.total_price -= item.price;
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.ngOnInit();
      return;
    }
  }
}
