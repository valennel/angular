import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course, Professor} from "../models/Auth";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {


  constructor(private readonly _httpClient: HttpClient,
              @Inject('localhost') private _apiUrl : string) {
  }

  getAll(){
    return this._httpClient.get<Professor[]>(this._apiUrl + "professors/all")
  }

}
