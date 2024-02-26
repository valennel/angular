export interface AuthDTO{
  login:string,
  token:string,
  roles:Role[]
}

export interface LoginForm{
  login:string,
  password:string
}

export interface Address{
  id:number,
  numero:string,
  rue:string,
  codePostal:string,
  ville:string
}

export interface Course {
  mnemonique:string,
  intitule:string,
  resume:string,
  professeurTitulaire:string
}

export interface Professor{
  id:number,
  numeroMatricule:string,
  titre:string,
  nom:string,
  prenom:string
}
enum Role {
  ADMIN,
  STUDENT,
  PROFESSOR
}
