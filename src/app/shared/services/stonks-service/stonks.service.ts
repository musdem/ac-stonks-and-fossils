import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stonk, BuyStonks, SellStonks, StonkSuccess } from '../../models/stonks.model';
import { api } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StonksService {

  constructor(private http: HttpClient) { }

  getStonks() {
    return this.http.get<Stonk[]>(`${api.base}${api.stonks}`);
  }

  sellStonks(stonk: SellStonks) {
    return this.http.post<StonkSuccess>(`${api.base}${api.stonks}${api.sellStonks}`, stonk);
  }

  buyStonks(stonks: BuyStonks) {
    return this.http.post<StonkSuccess>(`${api.base}${api.stonks}${api.buyStonks}`, stonks);
  }
}
