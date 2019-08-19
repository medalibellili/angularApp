import { Injectable } from '@angular/core';
import { Direction } from './direction.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  formData : Direction;
  
list : Direction[];
  readonly rootURL ="http://localhost:64072/api";
  constructor(private http : HttpClient) { }
  postDirection(formData : Direction){
    return this.http.post(this.rootURL+'/Direction',formData);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Direction').toPromise().then(res => this.list = res as Direction[]);
  }
  putDirection(formData : Direction){
    return this.http.put(this.rootURL+'/Direction/'+formData.DirectionID,formData);
     
   }

   deleteDirection(id : number){
    return this.http.delete(this.rootURL+'/Direction/'+id);
  }
}
