import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3><button (click)="increase($event)">clickBtn</button>`
})
export class HomeComponent implements OnInit {
  public message: string;
  count = 0;
  constructor() {}

  ngOnInit() {
    this.message = 'Hello';
  }


  increase($event): void {
    this.count++;
    this.message = 'HomeComponent' + this.count;
    console.log(this.count);
  }

}
