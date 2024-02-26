import { Inject, Injectable } from '@angular/core';
import { AuthDTO, LoginForm } from "../models/Auth";
import { BehaviorSubject, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecuriteService {

  private TOKEN_KEY = 'token';
  private ROLE_KEY = 'role';
  private LOGIN_KEY = 'username';
  private LOGIN_URL = 'joueur/login';

  userConnected = new BehaviorSubject<string | null>(null)

  constructor(
    private readonly _httpClient: HttpClient,
    @Inject('localhost') private _apiUrl: string) {
  }

  login(loginForm: LoginForm) {
    return this._httpClient.post<AuthDTO>(this._apiUrl + this.LOGIN_URL, loginForm).pipe(
      tap(data => {
        localStorage.setItem(this.TOKEN_KEY, data.token);
        localStorage.setItem(this.ROLE_KEY, data.role.toString());
        localStorage.setItem(this.LOGIN_KEY, data.username);
        this.userConnected.next(data.role.toString());
      })
    )
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    localStorage.removeItem(this.LOGIN_KEY)
    this.userConnected.next(null);
  }
}
