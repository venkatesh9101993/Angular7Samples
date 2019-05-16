import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumeparent',
  templateUrl: './consumeparent.component.html',
  styleUrls: ['./consumeparent.component.css']
})
export class ConsumeparentComponent implements OnInit {

  name1= "Angular"

  constructor() { }

  ngOnInit() {
  }
  
  receivednewname=function(e){
    console.log(e)
    this.name1 =e
  }


}
