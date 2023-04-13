import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.scss']
})
export class UnknownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() oneDate:any
}
