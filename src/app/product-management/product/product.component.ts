import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/provider/server.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData:any = []
  constructor(private server:ServerService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    let url = '/api/user/products'
    this.server.get(url).subscribe((res:any)=>{
      console.log(res)

      if(res.success=true){
        this.productData = res.data
      }
    })
  }
  goTo(url:any){
    this.server.navigateTo(url)
  }
}
