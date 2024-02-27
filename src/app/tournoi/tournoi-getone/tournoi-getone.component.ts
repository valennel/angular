import {Component, Input, OnInit} from '@angular/core';
import {Tournoi} from "../../models/Auth";
import {MessageService, SelectItem} from "primeng/api";

@Component({
  selector: 'app-tournoi-getone',
  templateUrl: './tournoi-getone.component.html',
  styleUrl: './tournoi-getone.component.css'
})
export class TournoiGetoneComponent implements OnInit{
@Input() tournoi!:Tournoi[]


  clonedTournoi: { [s: string]: Tournoi } = {};

  constructor( private messageService: MessageService) {}

  ngOnInit() {


  }

  onRowEditInit(tournoi: Tournoi) {
    this.clonedTournoi[tournoi.id as number] = { ...tournoi };
  }

  onRowEditSave(tournoi: Tournoi) {
    if (tournoi.nom !== null) {
      delete this.clonedTournoi[tournoi.id as number];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'tournoi is updated' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'nom null' });
    }
  }

  onRowEditCancel(tournoi:Tournoi, index: number) {
    this.tournoi[index] = this.clonedTournoi[tournoi.id as number];
    delete this.clonedTournoi[tournoi.id as number];
  }
}
