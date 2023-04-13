import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  // http:any
  response: any
  clickUser: number
  deleteUserId: number
  // indexDeleteCard: number

  constructor(public http: HttpClient){
    // this.http = http
    this.clickUser = 8
    this.deleteUserId = 1
    // this.indexDeleteCard = 1
    // this.response = response
  }

  // ngOnInit(){
  //   console.log(9999999)
  //   this.search()
  // }  
  
  updateCard(){

  }

  deleteUser(){
    return this.http.delete(`https://reqres.in/api/users/${this.deleteUserId}`)
    // return this.http.delete(`https://reqres.in/api/users/7`)
  }

  search(){
    return this.http.get('https://reqres.in/api/users?page=2')
  }

  searchUnknown(){
    return this.http.get('https://reqres.in/api/unknown')
  }

  requestCard(){
    return this.http.get(`https://reqres.in/api/users/${this.clickUser}`)
  }
}
