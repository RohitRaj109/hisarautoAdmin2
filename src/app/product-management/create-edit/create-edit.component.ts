import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerService } from 'src/app/provider/server.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
 form :FormGroup  = new FormGroup({
  image: new FormControl('',[]),
  title: new FormControl('',[]),
  contactNo: new FormControl('',[]),
  emailId: new FormControl('',[]),
  description: new FormControl('',[]),
  richDescription: new FormControl('',[]),
  countInStock :  new FormControl('',[]),
})
  constructor(private server:ServerService) { }

  ngOnInit(): void {
    this.form  = new FormGroup({
      image: new FormControl('',[]),
      title: new FormControl('',[]),
      contactNo: new FormControl('',[]),
      emailId: new FormControl('',[]),
      description: new FormControl('',[]),
      richDescription: new FormControl('',[]),
      countInStock :  new FormControl('',[]),
   })
  }
 createProduct(){
 let url = '/api/user/product'
 let data = {
  "image":"http://res.cloudinary.com/dd74og52k/image/upload/v1677914655/rupgcsvppgg1ibphjrsz.jpg",
  "images":[],
  "title": this.form.value.title,
  "contactNo": this.form.value.contactNo,
  "emailId": this.form.value.emailId,
  "description": this.form.value.description,
  "richDescription": this.form.value.richDescription,
  "countInStock": this.form.value.countInStock
 }
 this.server.post(url,data).subscribe((res:any)=>{
    console.log(res)
 })
 }
}
