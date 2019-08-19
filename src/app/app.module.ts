import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BureauxComponent } from './bureaux/bureaux.component';
import { BureauComponent } from './bureaux/bureau/bureau.component';
import { BureauListComponent } from './bureaux/bureau-list/bureau-list.component';
import { BureauService } from './shared/bureau.service';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EntresComponent } from './entres/entres.component';
import { EntreComponent } from './entres/entre/entre.component';
import { EntreListComponent } from './entres/entre-list/entre-list.component';
//import { RouterModule, Routes } from '@angular/router';
import { MyNewRoutingModule } from './my-new-routing.module';
import { TyypesComponent } from './tyypes/tyypes.component';
import { TyypeComponent } from './tyypes/tyype/tyype.component';
import { TyypeListComponent } from './tyypes/tyype-list/tyype-list.component';
import { MarquesComponent } from './marques/marques.component';
import { MarqueComponent } from './marques/marque/marque.component';
import { MarqueListComponent } from './marques/marque-list/marque-list.component';
import { ModelesComponent } from './modeles/modeles.component';
import { ModeleComponent } from './modeles/modele/modele.component';
import { ModeleListComponent } from './modeles/modele-list/modele-list.component';
import { DirectionsComponent } from './directions/directions.component';
import { DirectionComponent } from './directions/direction/direction.component';
import { DirectionListComponent } from './directions/direction-list/direction-list.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';
import { FournisseurListComponent } from './fournisseurs/fournisseur-list/fournisseur-list.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { UtilisateurComponent } from './utilisateurs/utilisateur/utilisateur.component';
import { UtilisateurListComponent } from './utilisateurs/utilisateur-list/utilisateur-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*const appRoutes: Routes = [

  
  {path: 'bureaux', component: BureauxComponent},
  {path: 'entres', component: EntresComponent}

]*/
@NgModule({
  declarations: [
    AppComponent,
    BureauxComponent,
    BureauComponent,
    BureauListComponent,
    EntresComponent,
    EntreComponent,
    EntreListComponent,
    TyypesComponent,
    TyypeComponent,
    TyypeListComponent,
    MarquesComponent,
    MarqueComponent,
    MarqueListComponent,
    ModelesComponent,
    ModeleComponent,
    ModeleListComponent,
    DirectionsComponent,
    DirectionComponent,
    DirectionListComponent,
    FournisseursComponent,
    FournisseurComponent,
    FournisseurListComponent,
    UtilisateursComponent,
    UtilisateurComponent,
    UtilisateurListComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //RouterModule.forRoot(appRoutes),
    MyNewRoutingModule
  ],
 // exports:[RouterModule],
  providers: [BureauService],
  bootstrap: [AppComponent]
})
export class AppModule { }
