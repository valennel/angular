import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tournoi} from "../models/Auth";

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  constructor(private readonly _httpClient: HttpClient,
             @Inject('localhost') private _apiUrl : string) {
  }

  getTop10(){
    return this._httpClient.get<Tournoi[]>(this._apiUrl + "tournoi/top10")
  }


}
