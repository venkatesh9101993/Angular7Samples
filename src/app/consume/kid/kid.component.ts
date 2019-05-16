import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit {

  @Input() sendname:any

  @Output() sendtoparent=new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  broadcastchange=function(){
      this.sendtoparent.emit(this.sendname);
    
  }

}
