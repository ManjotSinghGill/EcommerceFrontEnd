import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any){
    let url = environment.baseUrl + "userlogin";
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
        localStorage.setItem('userid', this.data.id);
        localStorage.setItem('isUserLogged?', 'True');
        localStorage.setItem('type', 'User');
        this.router.navigate(['/home']);
        this.ngOnInit();
      }
    })
  }


}