import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;
  isPartnerLogged: any;
  query: any;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.params.category;
    console.log(this.query);
    this.isPartnerLogged = localStorage.getItem('isPartnerLogged?');
    if(this.query == undefined){
      this.getProduct();
    }
    else{
      this.getProductByCategory(this.query);
    }
  }
  
  getProductByCategory(query: String){
    let url = `${environment.baseUrl}product/category/${query}`;
    this.http.get<any>(url).subscribe(res => {
      this.productList = res;
      console.log(this.productList);
    } )
  }

  getProduct(){
    let url = environment.baseUrl + "product";
    this.http.get<any>(url).subscribe(res => {
      this.productList = res;
      console.log(this.productList);
    } )
  }


  cart: any = {
    'userid': '',
    'listOfItems': [],
    'total_price': 0
  };
  
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
