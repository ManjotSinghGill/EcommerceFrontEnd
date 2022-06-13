import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partnerlogin',
  templateUrl: './partnerlogin.component.html',
  styleUrls: ['./partnerlogin.component.css']
})
export class PartnerloginComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any){
    let url = environment.baseUrl + "partnerlogin";
    let loginData = form;
    this.http.post(url, loginData).subscribe(res =>{
      if(res == null){
        window.alert("Wrong Email or Password");
      }
      else{
        this.data = res;
        localStorage.setItem('name', this.data.name);
        localStorage.setItem('email', this.data.email);
        localStorage.setItem('phone', this.data.phone);
        localStorage.setItem('partnerid', this.data.id);
        localStorage.setItem('isPartnerLogged?', 'True');
        localStorage.setItem('type', 'Partner');
        this.router.navigate(['/home']);
        this.ngOnInit();
      }
    })
  }
}
