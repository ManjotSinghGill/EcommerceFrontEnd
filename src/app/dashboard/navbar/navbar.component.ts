import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLogged: any;
  isPartnerLogged: any;
  route: any;
  checkRoute: any;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isUserLogged = localStorage.getItem('isUserLogged?');
    this.isPartnerLogged = localStorage.getItem('isPartnerLogged?');
    this.route = this.router.url;
    if(this.route == ('/home' || '/')){
      this.checkRoute = 'True';
    }
    else{
      this.checkRoute = 'False';
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/home']);
    this.ngOnInit();
  }

  search(search: any){
    let query = search.query;
    this.router.navigate(['products', query]);
  }
}
