import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import fossilList from '../../../assets/fossils';
import { LoginService } from '../../shared/services/login-service/login.service';
import {User} from '../../shared/models/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {FossilService} from '../../shared/services/fossil-service/fossil.service';
import {UpdateFossil} from '../../shared/models/fossil.model';
import {ToastService} from '../../shared/services/toast-service/toast.service';
import {Toast} from '../../shared/models/toast.model';

@Component({
  selector: 'ac-fossils-dashboard',
  templateUrl: './fossils-dashboard.component.html',
  styleUrls: ['./fossils-dashboard.component.scss']
})
export class FossilsDashboardComponent implements OnInit, AfterViewChecked{

  fossilUser: User;
  loggedIn = false;
  fossilAction: string;
  showModal = false;
  showAds = false;
  fossilList = fossilList;
  fossilAds = [];

  ownedForm = new FormGroup({
      'a0cd8947-e5a3-4af6-8ae2-db53a4820acc': new FormControl(''),
      'ed0b52f7-9aa6-4a1b-92e2-7b8d4286946b': new FormControl(''),
      '03824848-13ff-45c6-be73-fcf62f81f9b6': new FormControl(''),
      'b11ac33c-6217-4586-831e-58f7df14162d': new FormControl(''),
      'c31b399c-6d8b-4876-b991-e30970c5e75c': new FormControl(''),
      '4298312d-5e5d-454d-866c-87b0f5d27a8b': new FormControl(''),
      '25c14378-d1b1-4dcf-8883-f8084d2adb15': new FormControl(''),
      'c5712f03-b598-40d6-903a-bbc96e73121d': new FormControl(''),
      '78c9066d-8427-47c0-bec2-faf9981718a6': new FormControl(''),
      '61180e2b-2219-4215-a149-9f2c5cbf55e3': new FormControl(''),
      'bee69b36-520a-4f93-853b-967581b19ad5': new FormControl(''),
      'e4994c02-f16a-46ba-b93d-83b924c1c537': new FormControl(''),
      'c39a583b-b168-40ee-b178-f8cc585a330b': new FormControl(''),
      'ecf2a0ef-ec3c-4bb3-87c4-34f74f01736f': new FormControl(''),
      '9c1b254a-b61a-4b30-bd4d-e7b07ec9541a': new FormControl(''),
      '79cc61fc-5b8d-405c-b96c-f6b845e8b38a': new FormControl(''),
      '7301f54a-c65f-4a9b-89f8-44874b591281': new FormControl(''),
      'd69b920f-1772-43dd-b36a-673e3a6ed116': new FormControl(''),
      '6bcebdd4-8e3f-44e3-968b-3ffed5b901a7': new FormControl(''),
      '8b531618-ff53-455a-87dd-389a7aedbad7': new FormControl(''),
      '3b04d369-0146-4300-be63-120d1af47702': new FormControl(''),
      'f5ce3a5a-2a5c-464d-858d-7517dae8ef98': new FormControl(''),
      'dfbf0592-6fca-4379-8b34-cbc782f9eb83': new FormControl(''),
      '2a07ed0e-7ae3-4143-b006-4d6caae8c838': new FormControl(''),
      'fcb02be5-6a9a-4717-b305-061e8b1f3165': new FormControl(''),
      '46c0b5d8-a59b-447c-ac10-40c60d1ba4c4': new FormControl(''),
      'c2f8e937-3b6e-4232-8a27-db6df5e19b61': new FormControl(''),
      '4f3b27b8-0858-4d16-abf6-f1e4742d8c87': new FormControl(''),
      'cf281312-c905-4570-9d98-a75e8c35790f': new FormControl(''),
      '739b8585-e169-4ab5-84f7-ce0ddc60705b': new FormControl(''),
      '5a089877-8eb6-430f-91f7-1f32319f6672': new FormControl(''),
      '2964973f-fe93-4fe7-a257-c37bb909d8f3': new FormControl(''),
      'd7066ae6-058e-4e12-9450-f528b640c72f': new FormControl(''),
      '1cbbd567-63fd-44c5-b99e-f65684a97e9d': new FormControl(''),
      'c8f1fc8b-e3cb-491c-8737-5a2d8a381b5e': new FormControl(''),
      '474c4238-74d2-4de4-9f73-3af047cbf500': new FormControl(''),
      '7373a5b0-fecd-43a5-b85c-c5d9c959de25': new FormControl(''),
      '2b030e54-ee9b-42fe-b418-d58bea2bfe04': new FormControl(''),
      'c0fa4d35-2ff9-476c-a843-0b573598d327': new FormControl(''),
      '848368b8-11da-4c26-b699-7e5d1e10962d': new FormControl(''),
      '9c635922-375a-40fa-a8d6-b37a1292acc1': new FormControl(''),
      'd6726372-7532-4d14-9614-9c568dc09272': new FormControl(''),
      '01524b9b-3fe6-4d16-9240-f86962eb0872': new FormControl(''),
      'b20fd85a-3ee1-4a68-b695-f1349829ec17': new FormControl(''),
      '80688adb-c4c4-41e1-9a09-dc45c9c6df09': new FormControl(''),
      '29211a25-0863-4cd4-ae98-9b94fa4cf635': new FormControl(''),
      '1b43c234-86c4-4e4e-a5fd-d29136b1874d': new FormControl(''),
      '14086f68-c2ad-431b-8213-fae87104892e': new FormControl(''),
      '32e1b541-a8f3-4d83-8750-8140f8a00720': new FormControl(''),
      '51c0a4e2-3e67-4aec-b9c2-c847f7f0a147': new FormControl(''),
      '52090f5f-6475-4972-996e-f75d95f916f2': new FormControl(''),
      'a752d234-9b45-48be-9d4c-8a9cceef8d1e': new FormControl(''),
      '887e2cbe-d6e2-4f18-8a85-7e148fd10cb0': new FormControl(''),
      'e7f658d2-836c-4770-bae6-997dcef81fae': new FormControl(''),
      'ab5dd45d-0950-4c6d-8b2e-20e981d62c2f': new FormControl(''),
      'cebbc640-2703-4272-b29a-6d9f5a6583a5': new FormControl(''),
      '87f94ba0-6ea4-46dc-aeef-4a1c2d9661d8': new FormControl(''),
      'ca443385-9032-4b62-8b8e-8c8f4d122eb3': new FormControl(''),
      '7e4583eb-8c61-47ec-a97a-8459b574ed90': new FormControl(''),
      '07c6f01c-7efd-4ff2-b868-6dad2f8af948': new FormControl(''),
      '6dc68894-045d-4739-b0b7-a507aba22f24': new FormControl(''),
      'd27bd062-34ce-4dd6-bf9e-e848ddfb951d': new FormControl(''),
      '992e8837-37bf-4369-8fae-f94d9fd23013': new FormControl(''),
      '0ee19700-a26c-441c-bfdd-4ea8df640d4c': new FormControl(''),
      '85c409f5-7970-4678-a4d5-f0b0f16d8a52': new FormControl(''),
      'ecc39256-b630-4568-abde-da0ff145e2b5': new FormControl(''),
      'a3ffcd7f-a0ba-4f2c-9c0c-ab2be52c96c7': new FormControl(''),
      'a650505d-4e05-4d45-8e15-24d6ec7bef9d': new FormControl(''),
      '728d8eeb-54f2-47d3-a6f4-bce930d84914': new FormControl(''),
      '3d9f5c17-092e-44cb-9767-0546c042cdc3': new FormControl(''),
      'add51410-da1b-411d-bdb4-6f5229d5fe3b': new FormControl(''),
      'f8b789cd-eff0-40a0-a5cd-4a86e44ee71e': new FormControl(''),
      'ab3fce9f-aa9f-427a-8979-f7845c9835e5': new FormControl('')
    }
  );

  constructor(
    private cd: ChangeDetectorRef,
    private toastService: ToastService,
    private loginService: LoginService,
    private fossilService: FossilService
  ) {
    loginService.updateLoginStatus().subscribe(
      user => this.handleLogin(user)
    );
    fossilService.getFossilAds().subscribe(
      fossilAds => this.fossilAds = fossilAds,
      error => this.showToast(error.error.status, false)
    );
  }

  ngOnInit(): void {
    this.fossilUser = this.loginService.getUser();
  }

  ngAfterViewChecked(): void {
    if (this.fossilUser && this.fossilUser.fossilsOwned) {
      for (const fossil of this.fossilUser.fossilsOwned) {
        this.ownedForm.get(fossil).setValue('toggled');
      }
    }
  }
  private handleLogin(newUser: User) {
    if (newUser) {
      this.fossilUser = new User(newUser.name, newUser.priceBought, newUser.turnipsBought, newUser.fossilsOwned);
      this.loggedIn = true;
    } else {
      this.fossilUser = null;
      this.loggedIn = false;
    }
    this.cd.detectChanges();
  }

  showSellFossils() {
    this.fossilAction = 'sell';
    this.toggleModal();
  }

  showBuyFossils() {
    this.fossilAction = 'buy';
    this.toggleModal();
  }

  showDeleteFossils() {
    this.fossilAction = 'delete';
    this.toggleModal();
  }

  updateOwnedFossils() {
    const ownedFossils = [];
    for (const id in this.ownedForm.value) {
      if (this.ownedForm.value.hasOwnProperty(id)) {
        const curItem = this.ownedForm.value[id];
        if (curItem === 'toggled') {
          ownedFossils.push(id);
        }
      }
    }
    this.fossilService.updateUserFossils(new UpdateFossil(ownedFossils as [string])).subscribe(
      status => this.showToast(`Successfully updated owned fossils for ${status.name}`, false),
      error => this.showToast(error.error.status, false)
    );
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  swapTabs() {
    this.showAds = !this.showAds;
  }

  showToast(message: string, success: boolean) {
    this.toastService.getToasts().next(new Toast(message, 5, success));
  }
}
