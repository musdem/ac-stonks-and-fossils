import { Component, OnInit } from '@angular/core';
import fossilList from '../../../assets/fossils';
import { LoginService } from '../../shared/services/login-service/login.service';

@Component({
  selector: 'ac-fossils-dashboard',
  templateUrl: './fossils-dashboard.component.html',
  styleUrls: ['./fossils-dashboard.component.scss']
})
export class FossilsDashboardComponent implements OnInit {

  showModal = false;
  showAds = false;
  fossilList = fossilList;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    // TODO go through the list of part ids that the user owns once and check the checkbox of the corresponding html id
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
