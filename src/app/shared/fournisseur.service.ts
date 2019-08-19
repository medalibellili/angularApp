import { Injectable } from '@angular/core';
import { Fournisseur } from './fournisseur.model';

import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  formData : Fournisseur;
  
list : Fournisseur[];
  readonly rootURL ="http://localhost:64072/api"
  constructor(private http : HttpClient) { }

  postFournisseur(formData : Fournisseur){

    return this.http.post(this.rootURL+'/Fournisseur',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Fournisseur').toPromise().then(res => this.list = res as Fournisseur[]);
  }
  
  putFournisseur(formData : Fournisseur){
    return this.http.put(this.rootURL+'/Fournisseur/'+formData.FournisseurID,formData);
     
   }

   deleteFournisseur(id : number){
    return this.http.delete(this.rootURL+'/Fournisseur/'+id);
  }
}
