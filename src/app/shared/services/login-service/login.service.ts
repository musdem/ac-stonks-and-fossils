import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Create, CreateResponse, JwtToken, Login, LoginResponse, PubKey } from '../../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { api } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  jwt: string;
  pubKey: string;
  user: User;
  isBrowser: boolean;
  private loggedIn = new Subject<User>();

  constructor(
    // tslint:disable-next-line:ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // handling user side login info
  setJwt(jwt: string) {
    if (this.isBrowser) {
      localStorage.setItem('jwt', jwt);
    } else {
      this.jwt = jwt;
    }
  }

  getJwt() {
    if (this.isBrowser) {
      return localStorage.getItem('jwt');
    } else {
      return this.jwt;
    }
  }

  setPubKey() {
    if (this.isBrowser) {
      this.http.get<PubKey>(`${api.base}${api.getPubKey}`).subscribe(
        key => {
          this.pubKey = key.key;
          localStorage.setItem('pubKey', this.pubKey);
        }
      );
    } else {
      this.pubKey = '';
    }
  }

  getPubKey() {
    if (this.isBrowser) {
      return localStorage.getItem('pubKey');
    } else {
      return this.pubKey;
    }
  }

  setUser(user: User) {
    if (this.isBrowser) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      this.user = user;
    }
  }

  getUser() {
    if (this.isBrowser) {
      return JSON.parse(localStorage.getItem('user')) as User;
    } else {
      return this.user;
    }
  }

  // network calls regarding users
  createAccount(create: Create) {
    return this.http.post<CreateResponse>(`${api.base}${api.createAccount}`, create);
  }

  login(login: Login) {
    return this.http.post<LoginResponse>(`${api.base}${api.login}`, login);
  }

  logout() {
    localStorage.clear();
  }

  verify(token: JwtToken) {
    return this.http.post<boolean>(`${api.base}${api.verify}`, token);
  }

  callPubKey() {
    return this.http.get<string>(`${api.base}${api.getPubKey}`);
  }

  updateLoginStatus() {
    return this.loggedIn;
  }

  updateUser(token: JwtToken) {
    return this.http.post<User>(`${api.base}${api.update}`, token);
  }
}
