import { Component, Input, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private service: AppserviceService) { }

  ngOnInit(): void {
  }
  @Input() user:any;
  @Input() users:any;
  @Input() i:any;

  deleteUser(event: any){
    this.service.deleteUserId = event.target.id
    this.service.deleteUser()
    this.users.splice(this.i,1)
  }
}
