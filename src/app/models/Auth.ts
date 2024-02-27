export interface AuthDTO{
  username:string,
  token:string,
  role:Roles
}

export interface LoginForm {
  identifiant: string,
  motDePasse: string
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
enum Categories{
  JUNIOR,
  SENIOR,
  VETERAN
}

enum Statut{
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
