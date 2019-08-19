import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../../shared/marque.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TyypeService } from '../../shared/tyype.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

  constructor(private service : MarqueService, private tyypeservice : TyypeService ,
    private toastr : ToastrService) { 
    
  }

  ngOnInit() {
    this.resetForm();
    this.tyypeservice.refreshList();

  }
  resetForm(form? : NgForm){
     if(form != null)
      form.resetForm();
      this.service.formData={
        MarqueID : null,
      LibelleMarque : '',
      idtyype : null 
    }
  }

  onSubmit(form: NgForm){
    //console.log('FormValue On Submit: ',form.value);
    if(form.value.MarqueID == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    console.log('FormValue: ',form.value);
    this.service.postMarque(form.value).subscribe(res => {
      console.log('Result: ',res);
    this.toastr.success('Inserted successfully','MARQUE. Register');
      this.resetForm(form);
      this.service.refreshList();
      },err => console.log('Error: ',err));

  }

  updateRecord(form: NgForm) {
    this.service.putMarque(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'MARQUE. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }
}
