import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-consumechild1',
  templateUrl: './consumechild1.component.html',
  styleUrls: ['./consumechild1.component.css']
})
export class Consumechild1Component implements OnInit {

  allbanks:any
  constructor(private local:LocalService) { }

  ngOnInit() {
    this.accessLocalService();
    
  }

  accessLocalService=function()
  {
    console.log(this.local.myPI)
    console.log(this.local.bank)
    this.allbanks= this.local.addbanks()
    console.log(this.local.bank)
    

  }

}
