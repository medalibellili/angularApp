import { Component, OnInit } from '@angular/core';
import { EntreService } from '../../shared/entre.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-entre',
  templateUrl: './entre.component.html',
  styleUrls: ['./entre.component.css']
})
export class EntreComponent implements OnInit {

  constructor(private service : EntreService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
     form.resetForm();
     this.service.formData={
     EntreID : null,
     Libelle : ''
   }
 }


 onSubmit(form: NgForm){
  if(form.value.EntreID == null)
  this.insertRecord(form);
  else
  this.updateRecord(form);
}

insertRecord(form: NgForm){

  this.service.postEntre(form.value).subscribe(res => {
    this.toastr.success('Inserted successfully','EMP. Register');
    this.resetForm(form);
    this.service.refreshList();
    });
}

updateRecord(form: NgForm) {
  this.service.putEntre(form.value).subscribe(res => {
    this.toastr.info('Updated successfully', 'EMP. Register');
    this.resetForm(form);
    this.service.refreshList();
  });

}
}
