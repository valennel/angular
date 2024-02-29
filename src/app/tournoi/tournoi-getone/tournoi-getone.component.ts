import {Component, Input, OnInit} from '@angular/core';
import {Tournoi} from "../../models/Auth";
import {MessageService, SelectItem} from "primeng/api";
import {TournoiService} from "../../services/tournoi.service";

@Component({
  selector: 'app-tournoi-getone',
  templateUrl: './tournoi-getone.component.html',
  styleUrl: './tournoi-getone.component.css',
  providers:[MessageService]
})
export class TournoiGetoneComponent implements OnInit{
@Input() tournoiTab!:Tournoi[]


  constructor( private messageService: MessageService,
               private _tournoiService: TournoiService) {}

  ngOnInit() {


  }

  onRowEditInit(tournoi: Tournoi) {
    this.tournoiTab[tournoi.id as number] = { ...tournoi };
  }

  onRowEditSave(tournoi: Tournoi) {
    if (tournoi.nom !== null) {
      this._tournoiService.updateTournoi(tournoi).subscribe({
        next:()=>{      delete this.tournoiTab[tournoi.id as number];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'tournoi is updated' });},
        error:()=> this.messageService.add({ severity: 'error', summary: 'Error', detail: 'nom null' })
      })

    }
  }

  onRowEditCancel(tournoi:Tournoi) {
    this.tournoiTab[0]= this.tournoiTab[tournoi.id as number];
    delete this.tournoiTab[tournoi.id as number];
  }
}
