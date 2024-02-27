import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournoiRoutingModule } from './tournoi-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TournoiRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TournoiModule { }
