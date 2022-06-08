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
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isUserLogged = localStorage.getItem('isUserLogged?');
    this.isPartnerLogged = localStorage.getItem('isPartnerLogged?');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/home']);
    this.ngOnInit();
  }
}
