import { Injectable } from '@angular/core';
import { Modele } from './modele.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  formData : Modele;
  list : Modele[];
  readonly rootURL ="http://localhost:64072/api";
  constructor(private http : HttpClient) { }

  postModele(formData : Modele){
    return this.http.post(this.rootURL+'/Modele',formData);

  }
  refreshList(){
    this.http.get(this.rootURL+'/Modele').toPromise().then(res => this.list = res as Modele[]);
  }
  putModele(formData : Modele){
    return this.http.put(this.rootURL+'/Modele/'+formData.ModeleID,formData);
     
   }

   deleteModele(id : number){
    return this.http.delete(this.rootURL+'/Modele/'+id);
  }
}
