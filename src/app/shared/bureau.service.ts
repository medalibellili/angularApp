import { Injectable } from '@angular/core';
import { Bureau } from './bureau.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BureauService {

  formData : Bureau;
  list : Bureau[];
  readonly rootURL ="http://localhost:64072/api"
  constructor(private http : HttpClient) { }
//private nbr;
  postBureau(formData : Bureau){
    return this.http.post(this.rootURL+'/Bureau',formData);
  }
  refreshList(){
    this.http.get(this.rootURL+'/Bureau').toPromise().then(res => this.list = res as Bureau[]);
    
  }
  putBureau(formData : Bureau){
    return this.http.put(this.rootURL+'/Bureau/'+formData.BureauID,formData);
    //nbr=count(Bureau);
   }

   deleteBureau(id : number){
    return this.http.delete(this.rootURL+'/Bureau/'+id);
  }
}
