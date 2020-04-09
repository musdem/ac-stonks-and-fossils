import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login-service/login.service';
import { Create, CreateResponse, Login, LoginResponse } from '../shared/models/login.model';
import { User } from '../shared/models/user.model';
import { ToastService } from '../shared/services/toast-service/toast.service';
import { Toast } from '../shared/models/toast.model';

@Component({
  selector: 'ac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  createForm = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  account: User;
  showModal = false;
  loggingIn: boolean;
  loggedIn = false;

  constructor(
    private loginService: LoginService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    if (localStorage.user) {
      this.account = JSON.parse(localStorage.user);
      this.loggedIn = true;
    }
  }

  startCreateAccount() {
    this.toggleModal();
    this.loggingIn = false;
  }

  startLogin() {
    this.toggleModal();
    this.loggingIn = true;
  }

  createAccount() {
    const user = this.createForm.value as Create;
    this.loginService.createAccount(user).subscribe(
      // TODO change this into some kind of site wide popup system
      status => this.showToast(`successfully created account for ${status.user}`, true),
      error => this.showToast(error.error.status, false)
    );
  }

  login() {
    const info = this.loginForm.value as Login;
    this.loginService.login(info).subscribe(
      // TODO change this into some kind of site wide popup system
      status => this.handleLogin(status),
      error => this.showToast(error.error.status, false)
    );
  }

  logout() {
    this.loginService.logout();
    this.loggedIn = false;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  handleLogin(login: LoginResponse) {
    this.showToast(`successfully logged in as ${login.name}`, true);
    this.account = new User(login.name, login.priceBought, login.turnipsBought);
    this.loggedIn = true;
    this.loginService.setUser(this.account);
    this.loginService.setJwt(login.token);
  }

  showToast(message: string, success: boolean) {
    this.toggleModal();
    this.toastService.getToasts().next(new Toast(message, 5, success));
  }

}
