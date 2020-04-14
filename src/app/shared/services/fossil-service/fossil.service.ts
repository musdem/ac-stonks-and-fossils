import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FossilAd,
  PostFossilAd,
  PostSuccess,
  RemoveFossil,
  RemoveUpdateSuccess, UpdateFossil
} from '../../models/fossil.model';
import { api } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FossilService {

  constructor(private http: HttpClient) { }

  getFossilAds() {
    return this.http.get<FossilAd[]>(`${api.base}${api.fossils}`);
  }

  postFossilBuyAd(fossilAd: PostFossilAd) {
    return this.http.post<PostSuccess>(`${api.base}${api.fossils}${api.buyFossils}`, fossilAd);
  }

  postFossilSellAd(fossilAd: PostFossilAd) {
    return this.http.post<PostSuccess>(`${api.base}${api.fossils}${api.sellFossils}`, fossilAd);
  }

  deleteFossilAd(fossilAd: RemoveFossil) {
    return this.http.post<RemoveUpdateSuccess>(`${api.base}${api.fossils}${api.deleteFossils}`, fossilAd);
  }

  updateUserFossils(fossil: UpdateFossil) {
    return this.http.post<RemoveUpdateSuccess>(`${api.base}${api.fossils}${api.ownedFossils}`, fossil);
  }
}
