export interface AuthDTO{
  username:string,
  token:string,
  role:Roles
}

export interface LoginForm {
  identifiant: string,
  motDePasse: string
}


enum Roles {
  ADMIN,
  JOUEUR
}
enum Genre{GARCON, FILLE, AUTRE}
export interface joueurForm{
  pseudo:	string,
  email:	string,
  dateDeNaissance: Date,
  genre:Genre,
  role:Roles
}
