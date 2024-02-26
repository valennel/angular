import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../models/Auth";

@Injectable({
  providedIn: 'root'
})
export class CourseService {


constructor(private readonly _httpClient: HttpClient,
@Inject('localhost') private _apiUrl : string) {
}

getAll(){
  return this._httpClient.get<Course[]>(this._apiUrl + "course/all")
}



getOne(){
  return this._httpClient.get<Course>(this._apiUrl + "course/1");
}
}