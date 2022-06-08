import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any;
  cart: any = {
    'userid': '',
    'listOfItems': [],
    'total_price': 0
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    let url = environment.baseUrl + "product";
    this.http.get<any>(url).subscribe(res => {
      this.productList = res;
      console.log(this.productList);
    } );
  }
  
  addToCart(item: any){
    
    if(localStorage.getItem("userid")){
      if(localStorage.getItem("cart") !== null){
        this.cart = JSON.parse(localStorage.getItem("cart")!);
      }
      this.cart.userid = localStorage.getItem("userid");
      this.cart["listOfItems"].push(item.name);
      this.cart.total_price += Number(item.price);
      console.log(this.cart);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    else{
      window.alert("Please login before adding items to cart.")
    }
  }
}
