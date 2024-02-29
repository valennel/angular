import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {SecuriteService} from "../../services/securite.service";





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];
  role!: string | null


  constructor(readonly _router: Router,
             readonly _securityService: SecuriteService) {
  }
  ngOnInit() {

     this._securityService.userConnected.subscribe(
       value => {
         this.role = value;
         this.items = [
           {
             label: 'Tournoi',
             icon: 'pi pi-fw pi-file',
             command: (event) => { this.redirige('/tournoi'); },
             items: [
               {
                 label: 'Créer',
                 icon: 'pi pi-fw pi-plus',
                 visible: this.role === "ADMIN"
               },
               {
                 label: 'Supprimer',
                 icon: 'pi pi-fw pi-trash',
                 visible: this.role === "ADMIN"
               },
               {
                 separator: true
               },
               {
                 label: 'Afficher',
                 icon: 'pi pi-fw pi-align-left'
               },
               {
                 label: 'Rechercher',
                 icon: 'pi pi-fw pi-search'
               },
               {
                 label: 'Inscrire',
                 icon: 'pi pi-fw pi-users',
                 visible: this.role !== null
               },
               {
                 label: 'Désinscrire',
                 icon: 'pi pi-fw pi-user-minus',
                 visible: this.role !== null
               },
               {
                 separator: true
               },
               {
                 label: 'Démarrer',
                 icon: 'pi pi-fw pi-thumbs-up-fill',
                 visible: this.role === "ADMIN"
               },
               {
                 label: 'Passer au tour suivant',
                 icon: 'pi pi-fw pi-chevron-circle-right',
                 visible: this.role === "ADMIN"
               },
             ]
           },
           {
             label: 'Score',
             icon: 'pi pi-fw pi-pencil',
             items: [
               {
                 label: 'Afficher',
                 icon: 'pi pi-fw pi-align-left'
               },
               {
                 label: 'modifier',
                 icon: 'pi pi-fw pi-file-edit',
                 visible: this.role === "ADMIN"
               },
               {
                 label: 'Supprimer',
                 icon: 'pi pi-fw pi-trash',
                 visible: this.role === "ADMIN"
               }
             ]
           },
           {
             label: 'Utilisateur',
             icon: 'pi pi-fw pi-user',
             visible: this.role === "ADMIN",
             items: [
               {
                 label: 'Créer',
                 icon: 'pi pi-user-plus',
                 visible: this.role === "ADMIN"
               }
             ]
           },

           {
             separator: true
           },
           {
             label: 'Connecter',
             icon: 'pi pi-fw pi-apple',
             command: (event) => { this.redirige('/login'); }
           },
           {
             label: 'Déconnecter',
             icon: 'pi pi-fw pi-power-off',
             command: (event) => { this.logout(); }
           }
         ];
       }
     )

  }
  redirige(link:string){
    this._router.navigate([link]);
  }
  logout(){
    this._securityService.logout()
  }
}
