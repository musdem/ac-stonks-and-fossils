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
  showModal = false;
  priceSubmission: boolean;

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

  showPriceSubmit() {
    this.priceSubmission = true;
    this.toggleModal();
  }

  showBoughtSubmit() {
    this.priceSubmission = false;
    this.toggleModal();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
