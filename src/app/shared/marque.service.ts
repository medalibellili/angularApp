import { Injectable } from '@angular/core';
import { Marque } from './marque.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  formData : Marque;
  list : Marque[];
  readonly rootURL ="http://localhost:64072/api"
  constructor(private http : HttpClient) { }

  postMarque(formData : Marque){
    return this.http.post(this.rootURL+'/Marque',formData);
  }
  refreshList(){
   return this.http.get(this.rootURL+'/Marque').toPromise().then(res => this.list = res as Marque[]);
  }
  putMarque(formData : Marque){
    return this.http.put(this.rootURL+'/Marque/'+formData.MarqueID,formData);
     
   }

   deleteMarque(id : number){
    return this.http.delete(this.rootURL+'/Marque/'+id);
  }
}
