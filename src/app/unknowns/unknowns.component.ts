import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-unknowns',
  templateUrl: './unknowns.component.html',
  styleUrls: ['./unknowns.component.scss']
})
export class UnknownsComponent implements OnInit {
  data: any
  dataUnknown: any
  constructor(private service: AppserviceService) { }

  ngOnInit(): void {
    this.service.searchUnknown().subscribe(res=>{
      this.dataUnknown = res
      this.data = this.dataUnknown.data
      console.log(this.data)
    })
  }

}
