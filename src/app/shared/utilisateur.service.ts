import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  formData : Utilisateur;
  list : Utilisateur[];
  readonly rootURL ="http://localhost:64072/api";
  constructor(private http : HttpClient) { }

  postUtilisateur(formData : Utilisateur){
    return this.http.post(this.rootURL+'/Utilisateur',formData);


  }
  refreshList(){
    this.http.get(this.rootURL+'/Utilisateur').toPromise().then(res => this.list = res as Utilisateur[]);
  }

  putUtilisateur(formData : Utilisateur){
    return this.http.put(this.rootURL+'/Utilisateur/'+formData.UtilisateurID,formData);
     
   }

   deleteUtilisateur(id : number){
    return this.http.delete(this.rootURL+'/Utilisateur/'+id);
  }
}
