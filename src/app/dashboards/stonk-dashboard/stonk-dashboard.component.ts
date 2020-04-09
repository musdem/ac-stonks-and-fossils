import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { BuyStonks, SellStonks, StonkSuccess } from '../../shared/models/stonks.model';
import { LoginService } from '../../shared/services/login-service/login.service';
import { StonksService } from '../../shared/services/stonks-service/stonks.service';
import { ToastService } from '../../shared/services/toast-service/toast.service';
import { Toast } from '../../shared/models/toast.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ac-stonk-dashboard',
  templateUrl: './stonk-dashboard.component.html',
  styleUrls: ['./stonk-dashboard.component.scss']
})
export class StonkDashboardComponent implements OnInit {

  stonkSellForm = new FormGroup({
    stonkPrice: new FormControl('', Validators.required)
  });

  stonkBuyForm = new FormGroup({
    stonkPrice: new FormControl('', Validators.required),
    stonksBought: new FormControl('', Validators.required)
  });

  pattern = '^[1-9]\\d*$';
  user: User;
  loggedIn = false;
  investors = [];
  showModal = false;
  priceSubmission: boolean;

  constructor(
    private loginService: LoginService,
    private stonkService: StonksService,
    private toastService: ToastService,
    private cd: ChangeDetectorRef
  ) {
    loginService.updateLoginStatus().subscribe(
      user => this.handleLogin(user)
    );
    stonkService.getStonks().subscribe(
      stonks => this.investors = stonks,
      error => this.showToast(error.error.status, false)
    );
  }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    this.loggedIn = !!this.user;
  }

  private handleLogin(newUser: User) {
    if (newUser) {
      this.user = new User(newUser.name, newUser.priceBought, newUser.turnipsBought);
      this.loggedIn = true;
    } else {
      this.user = null;
      this.loggedIn = false;
    }
    this.cd.detectChanges();
  }

  showPriceSubmit() {
    this.priceSubmission = true;
    this.toggleModal();
  }

  showBoughtSubmit() {
    this.priceSubmission = false;
    this.toggleModal();
  }

  submitData() {
    if (this.priceSubmission) {
      const price = this.stonkSellForm.value.stonkPrice;
      const stonk = new SellStonks(this.loginService.getJwt(), this.loginService.getPubKey(), this.user.name, price);
      this.stonkService.sellStonks(stonk).subscribe(
        status => this.handleSellStonks(status, price),
        error => this.showToast(error.error.status, false)
      );
    } else {
      const {stonksBought, stonkPrice} = this.stonkBuyForm.value;
      const stonks = new BuyStonks(this.loginService.getJwt(), this.loginService.getPubKey(), stonksBought, stonkPrice);
      this.stonkService.buyStonks(stonks).subscribe(
        status => this.handleBuyStonks(status, stonksBought, stonkPrice),
        error => this.showToast(error.error.status, false)
      );
    }
    this.toggleModal();
  }

  handleSellStonks(status: StonkSuccess, price: number) {
    this.showToast(`Updated Stonk price for ${status.user}`, true);
    for (const investor of this.investors) {
      if (investor.name === status.user) {
        investor.price = price;
      }
    }
  }

  handleBuyStonks(status: StonkSuccess, stonksBought: number, stonkPrice: number) {
    this.showToast(`Updated Stonks bought for ${status.user}`, true);
    this.user.turnipsBought = stonksBought;
    this.user.priceBought = stonkPrice;
    this.loginService.setUser(this.user);
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  showToast(message: string, success: boolean) {
    this.toastService.getToasts().next(new Toast(message, 5, success));
  }
}
