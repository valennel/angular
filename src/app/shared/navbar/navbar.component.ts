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
  role!:string;


  constructor(readonly _router: Router,
             readonly _securityService: SecuriteService) {
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Tournoi',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Créer',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Supprimer',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Afficher',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Rechercher',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Inscrire',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Désinscrire',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Démarrer',
            icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Passer au tour suivant',
            icon: 'pi pi-fw pi-trash'
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
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Supprimer',
            icon: 'pi pi-fw pi-align-center'
          }
        ]
      },
      {
        label: 'Utilisateur',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Créer',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Effacer',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Modifier',
            icon: 'pi pi-fw pi-users',
          }
        ]
      },

      {
        separator: true
      },
      {
        label: 'Se connecter',
        icon: 'pi pi-fw pi-power-off',
        command: (event) => { this.redirige('/login'); }
      },
      {
        label: 'Se déconnecter',
        icon: 'pi pi-fw pi-power-off',
        command: (event) => { this.logout(); }
      }
    ];
  }
  redirige(link:string){
    this._router.navigate([link]);
  }
  logout(){
    this._securityService.logout()
  }
}
