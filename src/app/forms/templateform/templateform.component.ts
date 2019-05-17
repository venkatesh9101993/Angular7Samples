import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitDetail=function(hf)
  {
    console.log(hf)
    console.log("Form Value:" + JSON.stringify(hf.value))
    console.log("Form Valid status:" + JSON.stringify(hf.valid))
    console.log("Form inValid status:" + JSON.stringify(hf.invalid))
  }
    
  

}
