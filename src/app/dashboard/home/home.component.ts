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
      let tempCart = JSON.parse(localStorage.getItem("cart")!);
      
      if(tempCart == null){
        this.cart.listOfItems.push({'name': item.name, 'count': 1, 'price': item.price});
        this.cart.userid = localStorage.getItem("userid");
        this.cart.total_price += Number(item.price);
        console.log(this.cart);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        window.alert("Item added into cart");
        return;
      }

      for(let i = 0; i < tempCart.listOfItems.length; i++){
        let name = tempCart.listOfItems[i].name;
        if( name == item.name){
          tempCart.listOfItems[i].count += 1;
          tempCart.total_price += item.price;
          localStorage.setItem('cart', JSON.stringify(tempCart));
          window.alert("Item added into cart");
          console.log(tempCart);
          return;
        }
      }

      tempCart.listOfItems.push({'name': item.name, 'count': 1, 'price': item.price});
      tempCart.userid = localStorage.getItem("userid");
      tempCart.total_price += Number(item.price);
      console.log(tempCart);
      localStorage.setItem('cart', JSON.stringify(tempCart));
      window.alert("Item added into cart");
    }
    else{
      window.alert("Please login before adding items to cart.")
    }
  }
}
