import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SecuriteService} from "../services/securite.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;


  constructor(private readonly _securiteService: SecuriteService,
              private readonly _formBuilder: FormBuilder,
              private readonly _router: Router) {
    //this._securiteService.logout()
    this.loginForm = this._formBuilder.group({
      identifiant: this._formBuilder.control('',Validators.required),
      motDePasse: this._formBuilder.control('',Validators.required),

    });
  }

  login(){
    this._securiteService.login(this.loginForm.value)
      .subscribe({
        next: (response) => {
          this._router.navigate(['/home'])
        },
        error: (err) => {
          if(err.error.status === 403)
            alert(err.error.message)
        },
      });
  }

  logout(){
    this._securiteService.logout()
  }

  protected readonly onsubmit = onsubmit;
  protected readonly localStorage = localStorage;
}
