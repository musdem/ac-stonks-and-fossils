import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/services/login-service/login.service';
import {Create, CreateResponse, Login, LoginResponse} from '../shared/models/login.model';
import { User } from '../shared/models/user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    private loginService: LoginService
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
      status => this.handleCreateAccount(status),
      error => alert(error)
    );
  }

  login() {
    const info = this.loginForm.value as Login;
    this.loginService.login(info).subscribe(
      // TODO change this into some kind of site wide popup system
      status => this.handleLogin(status),
      error => alert(error.error.status)
    );
  }

  logout() {
    this.loginService.logout();
    this.loggedIn = false;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  handleCreateAccount(account: CreateResponse) {
    alert(`successfully created account for ${account.user}`);
    this.toggleModal();
  }

  handleLogin(login: LoginResponse) {
    alert(`successfully logged in as ${login.name}`);
    this.account = new User(login.name, login.priceBought, login.turnipsBought);
    this.loggedIn = true;
    this.loginService.setUser(this.account);
    this.loginService.setJwt(login.token);
    this.toggleModal();
  }

}
