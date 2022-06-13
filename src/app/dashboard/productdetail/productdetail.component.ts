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
  isPartnerLogged: any;
  cart: any = {
    'userid': '',
    'listOfItems': [],
    'total_price': 0
  };

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.isPartnerLogged = localStorage.getItem('isPartnerLogged?');
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
