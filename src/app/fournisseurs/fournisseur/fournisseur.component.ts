import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../../shared/fournisseur.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private service : FournisseurService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData={
      FournisseurID : null,
      Libelle : '',
      Adresse : '',
      Telephonne : '',
      Email : '',
      Responsable : ''
    }  }


    onSubmit(form: NgForm){
      if(form.value.FournisseurID == null)
      this.insertRecord(form);
      else
      this.updateRecord(form);
    }
    
    insertRecord(form: NgForm){
      this.toastr.success('Inserted successfully','FOURNISSEUR. Register');
      this.service.postFournisseur(form.value).subscribe(res => {
        this.resetForm(form)
        this.service.refreshList();
        });
        
    }
    updateRecord(form: NgForm) {
      this.service.putFournisseur(form.value).subscribe(res => {
        this.toastr.info('Updated successfully', 'FOURNISSEUR. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
  
    }

   
}
