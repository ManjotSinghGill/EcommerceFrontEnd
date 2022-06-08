import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  type: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  setType(type: any){
    this.type = type;
  }

  onSubmit(form: any){
    if(this.type == "user"){
      let url = environment.baseUrl + "user"
      this.http.post(url, form).subscribe(res =>{
      console.log(res);
    })
    }
    else{
      let url = environment.baseUrl + "partner"
      this.http.post(url, form).subscribe(res =>{
      console.log(res);
    })
    }
  }

}
