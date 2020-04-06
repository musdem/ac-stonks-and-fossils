import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-stonk-dashboard',
  templateUrl: './stonk-dashboard.component.html',
  styleUrls: ['./stonk-dashboard.component.scss']
})
export class StonkDashboardComponent implements OnInit {

  user = {
    name: 'Zack',
    price: 140,
    priceBought: 91,
    turnipsBought: 1960
  };
  investors = [];

  constructor() { }

  ngOnInit(): void {
    // TODO pull in investor data from API
    this.investors = [
      {
        name: 'Annie',
        price: 150
      },
      {
        name: 'Connor',
        price: 160
      },
      {
        name: 'Ohan',
        price: 170
      },
      {
        name: 'Matthew',
        price: 80
      }
    ];
  }

}
