import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TournoiComponent } from './tournoi.component';
import {TournoiGetoneComponent} from "./tournoi-getone/tournoi-getone.component";

const routes: Routes = [
  {
    path: '' ,
    component: TournoiComponent,
    children: [
      {path: 'tournoi-getone', component: TournoiGetoneComponent},

    ]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournoiRoutingModule { }
