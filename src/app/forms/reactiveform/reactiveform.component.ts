import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myForm:any
  constructor() { }

  ngOnInit() {
    this.myForm=new FormGroup({
      fn:new FormControl("",Validators.compose(
        [Validators.required,Validators.minLength(3),
        Validators.pattern("^[a-zA-Z]+$")]

        
        )),
      score:new FormControl("",Validators.compose(
        [Validators.required,Validators.min(10)])),
      hobby:new FormControl
    })
  }
  submitform=function(reactiveform){
    console.log(reactiveform)
  }

}
