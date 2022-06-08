import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  id: any;
  productDetail: any;
  cart: any = {
    'userid': '',
    'listOfItems': [],
    'total_price': 0
  };

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getProductDetail();
  }

  getProductDetail(){
    let url = environment.baseUrl + "product/" + this.id;
    this.http.get(url).subscribe(res =>{
      this.productDetail = res;
      console.log(this.productDetail);
    })
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
