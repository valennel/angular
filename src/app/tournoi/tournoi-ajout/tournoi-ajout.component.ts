import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Tournoi} from "../../models/Auth";

@Component({
  selector: 'app-tournoi-ajout',
  templateUrl: './tournoi-ajout.component.html',
  styleUrl: './tournoi-ajout.component.css'
})
export class TournoiAjoutComponent implements OnInit{

@Input() tournoi!: Tournoi;

tournoiForm! : FormGroup;

onSubmit(){}
  constructor(private fb: FormBuilder) { }



  ngOnInit() {
    this.tournoiForm = this.fb.group({
      nom: [''],
      lieu: [''],
      nombreJoueursInscrits: [''],
      nombreMinJoueurs: [''],
      nombreMaxJoueurs: [''],
      eLOMin: [''],
      eLOMax: [''],
      categories: [''],
      statut: [''],
      womenOnly: [''],
      dateFinInscriptions: [''],
      rondeCourante: ['']
    });


  }
}
