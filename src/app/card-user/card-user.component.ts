import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  dataResponce: any
  data: any
  name: string
  first_name: string
  last_name: string
  email: string
  text: string
  hide: boolean

  constructor(public service: AppserviceService,
    public http: HttpClient,
  ) {
    this.name = 'Oleg'
    this.first_name = ''
    this.last_name = ''
    this.email = ''
    this.text = ''
    this.hide = false
  }

  ngOnInit(): void {
    this.service.requestCard().subscribe(res => {
      this.dataResponce = res
      this.data = this.dataResponce.data
      console.log(this.data)
      this.first_name = this.dataResponce.data.first_name
      this.last_name = this.dataResponce.data.last_name
      this.email = this.dataResponce.data.email
      this.text = this.dataResponce.support.text
    })
  }

  update() {
     this.hide = !this.hide
  }

  push(){
    this.hide = !this.hide
    const data = {
      "data": {
        "id": this.service.clickUser,
        "email": this.email,
        "first_name": this.first_name,
        "last_name": this.last_name,
        "support": {
          "text": this.text
        }
      }
    }
    const body = JSON.stringify(data)

    this.http.put<any>(`https://reqres.in/api/users/${this.service.clickUser}`, body, {
    headers:{
      'Content-Type': 'application/json'
    }
      }).subscribe(
        {
          next:((response: any) => {
            console.log(response)
          }),

          error: (error => {
            console.log(error)
          })
        }
      )
  }

}
