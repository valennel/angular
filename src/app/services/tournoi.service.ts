import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tournoi, TournoiForm} from "../models/Auth";
import {BehaviorSubject, Observable} from "rxjs";

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

  getOne(id:number){
    return this._httpClient.get<Tournoi>(this._apiUrl + "tournoi/" + id )
  }

  deleteOne(id:number){
    return this._httpClient.delete<Tournoi>(this._apiUrl + "tournoi/" + id)
  }
  updateTournoi(tournoi:Tournoi){
    return new BehaviorSubject<Tournoi>(tournoi)
}
  addTournoi(tournoi: TournoiForm){
    return this._httpClient.post<Tournoi>(this._apiUrl + "tournoi/creation", tournoi)
  }
  }
