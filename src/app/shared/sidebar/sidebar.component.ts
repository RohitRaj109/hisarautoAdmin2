import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/provider/server.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private server:ServerService) { }

  ngOnInit(): void {
  }
 goTo(url:any){
  this.server.navigateTo(url)
 }
}
