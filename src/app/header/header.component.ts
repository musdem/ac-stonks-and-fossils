import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/services/login-service/login.service';
import {Create, JwtToken, Login, LoginResponse} from '../shared/models/login.model';
import { User } from '../shared/models/user.model';
import { ToastService } from '../shared/services/toast-service/toast.service';
import { Toast } from '../shared/models/toast.model';
import { ConfirmPasswordValidator } from './validators/password-match/password-match.validator';

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
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  }, ConfirmPasswordValidator.MatchPassword);

  account: User;
  showModal = false;
  loggingIn: boolean;
  loggedIn = false;

  constructor(
    private loginService: LoginService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.account = this.loginService.getUser();
    this.loggedIn = !!this.account;
    if (this.loggedIn) {
      this.loginService.updateUser(new JwtToken(this.loginService.getJwt(), this.loginService.getPubKey())).subscribe(
        user => {
          this.loginService.setUser(user as User);
          this.account = user as User;
          this.loginService.updateLoginStatus().next(user);
        },
        () => {
          this.showToast('Failed to update user information from the server, please login again.', false);
          this.logout();
        }
      );
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
      status => this.showToast(`successfully created account for ${status.user}`, true),
      error => this.showToast(error.error.status, false)
    );
  }

  login() {
    const info = this.loginForm.value as Login;
    this.loginService.login(info).subscribe(
      status => this.handleLogin(status),
      error => this.showToast(error.error.status, false)
    );
  }

  logout() {
    this.loginService.logout();
    this.loginService.updateLoginStatus().next(null);
    this.loggedIn = false;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  handleLogin(login: LoginResponse) {
    this.showToast(`successfully logged in as ${login.name}`, true);
    this.account = new User(login.name, login.priceBought, login.turnipsBought, login.fossilsOwned);
    this.loginService.setPubKey();
    this.loginService.setUser(this.account);
    this.loginService.setJwt(login.token);
    this.loginService.updateLoginStatus().next(this.account);
    this.loggedIn = true;
  }

  showToast(message: string, success: boolean) {
    this.toggleModal();
    this.toastService.getToasts().next(new Toast(message, 5, success));
  }

}
