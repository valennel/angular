import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from "./shared/page404/page404.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {TournoiComponent} from "./tournoi/tournoi.component";


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'404', component:Page404Component},
  {path:'tournoi',component:TournoiComponent},
  {path:'**', redirectTo:'404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
