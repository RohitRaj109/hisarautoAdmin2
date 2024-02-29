import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { ServerService } from 'src/app/provider/server.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData:any = []
  constructor(private server:ServerService,private router:Router) {  this.getProduct(); }
  baseUrl = environment.baseUrl

  ngOnInit(): void {
  
  }

  getProduct(){
    let url = '/products'
    this.server.get(url).subscribe((res:any)=>{
      console.log(res)

      if(res.success=true){
        this.productData = res.data
      }
    })
  }

  OnDelete(id:any){
    console.log(id)
    this.server.delete(`${this.baseUrl}/delete/${id}`).subscribe((res)=>{
      console.log(res)
    })
  }
  goTo(url:any){
    this.server.navigateTo(url)
  }
  openModal(id:any){

    this.router.navigate(['create-product']);
    localStorage.setItem('productId',JSON.stringify(id))
    localStorage.setItem('editProduct',JSON.stringify(true))
  }
}
