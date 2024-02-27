import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {authIntercpetorInterceptor} from "./interceptors/auth-intercpetor.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DockModule} from "primeng/dock";
import {RadioButtonModule} from "primeng/radiobutton";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {Page404Component} from "./shared/page404/page404.component";
import {LoginComponent} from "./login/login.component";
import {PanelMenuModule} from "primeng/panelmenu";
import {BadgeModule} from "primeng/badge";
import {MenuModule} from "primeng/menu";
import {SlideMenuModule} from "primeng/slidemenu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [

    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    Page404Component,
    LoginComponent,
    HomeComponent,
    TournoiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DockModule,
    RadioButtonModule,
    PasswordModule,
    ButtonModule,
    TableModule,
    PanelMenuModule,
    BadgeModule,
    MenuModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule
  ],
  providers: [
    { provide : "localhost", useValue : "http://localhost:8080/api/"},
    { provide: HTTP_INTERCEPTORS, useClass: authIntercpetorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
