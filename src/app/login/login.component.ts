import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ServerService } from '../provider/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup = new FormGroup({
  email: new FormControl('',[]),
  pass:new FormControl('',[])
})
  constructor(private server:ServerService) { }

  ngOnInit(): void {
  }
onLogIn(){
  let data = {
    email: this.form.value.email,
    password: this.form.value.pass
  }
  let url = ''

  this.server.navigateTo('user');
    this.server.post(url,data).subscribe((res:any)=>{
      console.log(res)
    })
}
}
