import { Component, OnInit } from '@angular/core';
import { TyypeService } from '../../shared/tyype.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tyype',
  templateUrl: './tyype.component.html',
  styleUrls: ['./tyype.component.css']
})
export class TyypeComponent implements OnInit {

  constructor(private service : TyypeService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){

    if(form != null)
    form.resetForm();
        this.service.formData={
          TypeID : null,
          Libelle : ''
        }
          }

          onSubmit(form: NgForm){
            if(form.value.TypeID == null)
            this.insertRecord(form);
            else
            this.updateRecord(form);
          }
          
          insertRecord(form: NgForm){
            this.service.postTyype(form.value).subscribe(res => {
              this.toastr.success('Inserted successfully','TYPE. Register');
              this.resetForm(form)
              this.service.refreshList();
              });
          
          }

          updateRecord(form: NgForm) {
            this.service.putTyype(form.value).subscribe(res => {
              this.toastr.info('Updated successfully', 'TYPE. Register');
              this.resetForm(form);
              this.service.refreshList();
            });
        
          }
}
