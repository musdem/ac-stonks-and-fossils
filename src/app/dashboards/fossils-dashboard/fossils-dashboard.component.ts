import { Component, OnInit } from '@angular/core';
import fossilList from '../../../assets/fossils';

@Component({
  selector: 'ac-fossils-dashboard',
  templateUrl: './fossils-dashboard.component.html',
  styleUrls: ['./fossils-dashboard.component.scss']
})
export class FossilsDashboardComponent implements OnInit {

  showModal = false;
  showAds = false;

  constructor() { }

  ngOnInit(): void {
  }

  showSellFossils() {
    this.toggleModal();
  }

  showBuyFossils() {
    this.toggleModal();
  }

  showDeleteFossils() {
    this.toggleModal();
  }

  showUpdateOwnedFossils() {
    this.toggleModal();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  swapTabs() {
    this.showAds = !this.showAds;
  }

}
