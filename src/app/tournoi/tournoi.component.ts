import {Component, OnInit} from '@angular/core';
import {TournoiService} from "../services/tournoi.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {Tournoi} from "../models/Auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrl: './tournoi.component.css'
})
export class TournoiComponent implements OnInit{
  tournois!: Tournoi[];
 ceTournoi!: Tournoi[];

  deleteTournoi(id: number){}

  editTournoi(id:number){}

  openDetail(id:number){
    this._tournoiService.getOne(id).pipe(takeUntil(this.$destroyed)).subscribe({
      next:(valeur) => this.ceTournoi=valeur,
      error:(err)=>console.log(err.error()),
      complete:()=>console.log("Chargement terminé")
    })

    this.redirige('/tournoi/tournoi-getone');
  }

  selectedTournoi: Tournoi | undefined;

  first = 0;

  rows = 10;



  $destroyed = new Subject<boolean>();


  course!: Observable<string>;

  constructor(private readonly _tournoiService:TournoiService,
              private readonly _router: Router) {
  }

  ngOnInit() {

    this._tournoiService.getTop10().pipe(
      takeUntil(this.$destroyed)
    ).subscribe({
        next: (valeur) => this.tournois=valeur,
        error:(err)=>console.log(err.error()),
        complete:()=>console.log("Chargement terminé")
      }
    );

  }

  ngOnDestroy() {


    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.tournois ? this.first === this.tournois.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.tournois ? this.first === 0 : true;
  }

  redirige(link:string){
    this._router.navigate([link]);
  }

}



