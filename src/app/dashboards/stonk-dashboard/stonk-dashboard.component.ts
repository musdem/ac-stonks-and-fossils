import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { Stonk } from '../../shared/models/stonks.model';

@Component({
  selector: 'ac-stonk-dashboard',
  templateUrl: './stonk-dashboard.component.html',
  styleUrls: ['./stonk-dashboard.component.scss']
})
export class StonkDashboardComponent implements OnInit {

  user = new User(
    'Zack',
    91,
    1960
  );
  investors = [];
  showModal = false;
  priceSubmission: boolean;

  constructor() { }

  ngOnInit(): void {
    // TODO pull in investor data from API
    this.investors = [
      new Stonk(
        'Annie',
        150
      ),
      new Stonk(
        'Connor',
        160
      ),
      new Stonk(
        'Ohan',
        170
      ),
      new Stonk(
        'Matthew',
        80
      )
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
