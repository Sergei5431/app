import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  usersResponse: any
  users: any

  constructor(
    public service: AppserviceService,
     private http: HttpClient,
     private router:Router
     ) { 
    
  }

  async transition(event:any){
    if(event.target.className === 'avatar'){
      this.service.clickUser = event.target.id
      await this.router.navigate(['/card'])
    }
  }

  ngOnInit() {
   
    this.service.search().subscribe(res =>{
      this.usersResponse = res
      this.users = this.usersResponse.data
    })
    
  }
  
  

}
