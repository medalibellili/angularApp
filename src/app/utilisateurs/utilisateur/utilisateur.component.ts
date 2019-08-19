import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../shared/utilisateur.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  constructor(private service : UtilisateurService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData={
      UtilisateurID : null,
      Nom : '',
      Matricule : '',
      Password : '',
      Role : ''
      
    }  }


    onSubmit(form: NgForm){
      if(form.value.UtilisateurD == null)
      this.insertRecord(form);
      else
      this.updateRecord(form);
    }
    
    insertRecord(form: NgForm){
    
      this.service.postUtilisateur(form.value).subscribe(res => {
        this.toastr.success('Inserted successfully','UTILISATEUR. Register');
        this.resetForm(form)
        this.service.refreshList();
        });
    }

    updateRecord(form: NgForm) {
      this.service.putUtilisateur(form.value).subscribe(res => {
        this.toastr.info('Updated successfully', 'UTILISATEUR. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
  
    }
}
