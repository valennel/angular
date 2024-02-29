export interface AuthDTO{
  username:string,
  token:string,
  role:Roles
}

export interface LoginForm {
  identifiant: string,
  motDePasse: string
}
export class TournoiForm{
  nom:	string;
  lieu:	string;
  nombreJoueursInscrits: number;
  nombreMinJoueurs: number;
  nombreMaxJoueurs: number;
  eLOMin: number;
  eLOMax: number;
  categories: Categories[];
  statut: Statut;
  womenOnly: boolean;
  dateFinInscriptions: Date;

  constructor() {
    this.nom='';
    this.lieu=	'';
    this.nombreJoueursInscrits = 0;
    this.nombreMinJoueurs=0;
    this.nombreMaxJoueurs= 0;
    this.eLOMin= 0;
    this.eLOMax= 0;
    this.categories= []
    this.statut= Statut.EN_ATTENTE_DE_JOUEURS;
    this.womenOnly= false;
    this.dateFinInscriptions= new Date()
  }

}
export interface Tournoi{
  id:number,
  nom:	string,
  lieu:	string,
  nombreJoueursInscrits: number,
  nombreMinJoueurs: number,
  nombreMaxJoueurs: number,
  eLOMin: number,
  eLOMax: number,
  categories: Categories
  statut: Statut,
  womenOnly: boolean,
  dateFinInscriptions: Date,
  rondeCourante: number,
  recontresActuelles: RecontresActuelles[]
}

export interface RecontresActuelles {
  id: number
  tournoiId: number,
  pseudoJoueurBlanc: string,
  pseudoJoueurNoir: string,
  ronde: number,
  resultat:Resultat
}

enum Resultat{
  PAS_ENCORE_JOUEE,
  NOIR,
  BLANC,
  EGALITE
}
export interface JoueursInscrits{
  pseudo:string,
  email:string,
  dateDeNaissance : Date,
  elO:number,
  genre: Genre
}
export enum Categories{
  JUNIOR,
  SENIOR,
  VETERAN
}

export enum Statut{
  EN_ATTENTE_DE_JOUEURS,
  EN_COURS,
  TERMINE
}
enum Roles {
  ADMIN,
  JOUEUR
}
enum Genre{
  GARCON,
  FILLE,
  AUTRE}
export interface joueurForm{
  pseudo:	string,
  email:	string,
  dateDeNaissance: Date,
  genre:Genre,
  role:Roles
}
