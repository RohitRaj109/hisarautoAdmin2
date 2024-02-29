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
productId:any =null
editData:boolean = false

  constructor(private server:ServerService) {
    this.editData= JSON.parse(localStorage.getItem('editProduct'))
    console.log(this.editData)
    this.productId = JSON.parse( localStorage.getItem('editProduct'));
   }

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

  get f(){
    return this.form.controls.value;
  }
 createProduct(){
 let url = '/product'
 let data = {
  "image":"http://res.cloudinary.com/dd74og52k/image/upload/v1677914655/rupgcsvppgg1ibphjrsz.jpg",
  "images":[],
  "title": this.form.controls['title'].value,
  "contactNo": this.form.value.contactNo,
  "emailId": this.form.value.emailId,
  "description": this.form.value.description,
  "richDescription": this.form.value.richDescription,
  "countInStock": this.form.value.countInStock
 }
 console.log(data)
 this.server.post(url,data).subscribe((res:any)=>{
    console.log(res)
 })
 }

 editProduct(){
  let data = {
    image: '',
    title: this.form.value.title,
    contactNo: this.form.value.contactNo,
    emailId: this.form.value.emailId,
    description: this.form.value.description,
    richDescription: this.form.value.richDescription,
    countInStock : this.form.value.countInStock,
  }

    this.server.post(`update/${ this.productId}`,data).subscribe((res)=>{
      console.log(res)
    })
  console.log('updatedData',data)
 }
}
