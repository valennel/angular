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
    let isConnected = false;
    const role = localStorage.getItem("role");
    const isAdmin = role === 'ADMIN';
    const isJoueur = role === 'JOUEUR';
    if(role ==='ADMIN' || role ==='JOUEUR'){isConnected = true}
    console.log(role)
    this.items = [
      {
        label: 'Tournoi',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Créer',
            icon: 'pi pi-fw pi-plus',
            visible: isAdmin
          },
          {
            label: 'Supprimer',
            icon: 'pi pi-fw pi-trash',
            visible: isAdmin
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
            icon: 'pi pi-fw pi-trash',
            visible: isConnected
          },
          {
            label: 'Désinscrire',
            icon: 'pi pi-fw pi-trash',
            visible: isConnected
          },
          {
            separator: true
          },
          {
            label: 'Démarrer',
            icon: 'pi pi-fw pi-trash',
            visible: isAdmin
          },
          {
            label: 'Passer au tour suivant',
            icon: 'pi pi-fw pi-trash',
            visible: isAdmin
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
            icon: 'pi pi-fw pi-align-right',
            visible: isAdmin
          },
          {
            label: 'Supprimer',
            icon: 'pi pi-fw pi-align-center',
            visible: isAdmin
          }
        ]
      },
      {
        label: 'Utilisateur',
        icon: 'pi pi-fw pi-user',
        visible: isAdmin,
        items: [
          {
            label: 'Créer',
            icon: 'pi pi-fw pi-user-plus',
            visible: isAdmin
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
