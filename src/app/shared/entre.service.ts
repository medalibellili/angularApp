import { Injectable } from '@angular/core';
import { Entre } from './entre.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EntreService {

  formData : Entre;
  
list : Entre[];
  readonly rootURL ="http://localhost:64072/api";
  constructor(private http : HttpClient) { }

  postEntre(formData : Entre){
    return this.http.post(this.rootURL+'/Entre',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Entre').toPromise().then(res => this.list = res as Entre[]);
  }

  putEntre(formData : Entre){
    return this.http.put(this.rootURL+'/Entre/'+formData.EntreID,formData);
     
   }

   deleteEntre(id : number){
    return this.http.delete(this.rootURL+'/Entre/'+id);
  }
}
