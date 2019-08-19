import { Injectable } from '@angular/core';
import { Tyype } from './Tyype.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TyypeService {

  formData : Tyype;
  
list : Tyype[];
  readonly rootURL ="http://localhost:64072/api";
  constructor(private http : HttpClient) { }

  postTyype(formData : Tyype){
    return this.http.post(this.rootURL+'/Tyype',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Tyype').toPromise().then(res => this.list = res as Tyype[]);
  }

  putTyype(formData : Tyype){
    return this.http.put(this.rootURL+'/Tyype/'+formData.TypeID,formData);
     
   }

   deleteTyype(id : number){
    return this.http.delete(this.rootURL+'/Tyype/'+id);
  }
}
