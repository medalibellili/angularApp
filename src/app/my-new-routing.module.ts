import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BureauxComponent } from './bureaux/bureaux.component';
import { EntresComponent } from './entres/entres.component';
import { TyypesComponent } from './tyypes/tyypes.component';
import { MarquesComponent } from './marques/marques.component';
import { ModelesComponent } from './modeles/modeles.component';
import { DirectionsComponent } from './directions/directions.component';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';
import { FournisseurListComponent } from './fournisseurs/fournisseur-list/fournisseur-list.component';
import { UtilisateurComponent } from './utilisateurs/utilisateur/utilisateur.component';
import { UtilisateurListComponent } from './utilisateurs/utilisateur-list/utilisateur-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const appRoutes: Routes = [

  {path: '', component: DashboardComponent},
  {path: 'fournisseurs', component: FournisseurComponent},
  {path: 'listfournisseurs', component: FournisseurListComponent},

  {path: 'utilisateurs', component: UtilisateurComponent},
  {path: 'listutilisateurs', component: UtilisateurListComponent},
  

  {path: 'bureaux', component: BureauxComponent},
  {path: 'marques', component: MarquesComponent},
  {path: 'modeles', component: ModelesComponent},
  {path: 'entres', component: EntresComponent},
  {path: 'types', component: TyypesComponent},
  {path: 'directions', component: DirectionsComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class MyNewRoutingModule { }
