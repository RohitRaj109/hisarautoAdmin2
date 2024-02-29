import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient, private router:Router) { }

  post(url:string,data:any){
    return this.http.post(`${environment.baseUrl}${url}`,data);
  }
  get(url:string){
    return this.http.get(`${environment.baseUrl}${url}`);
  }
  delete(id:String){
    return this.http.delete(`${id}`);
  }
  navigateTo(url:string){
   // this.router.navigate([url])
   this.router.navigateByUrl(url)
  }
}
