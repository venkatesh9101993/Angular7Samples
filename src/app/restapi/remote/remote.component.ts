import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users:any=[]

  constructor(private restapi:RestapiService) { }

  ngOnInit() {
    this.restapi.getRemoteUsers1().subscribe((response)=>{
      this.users=response
    },function(error){});
    
  }

}
