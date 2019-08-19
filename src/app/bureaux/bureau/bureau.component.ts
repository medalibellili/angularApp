import { Component, OnInit } from '@angular/core';
import { BureauService } from '../../shared/bureau.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EntreService } from '../../shared/entre.service';

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.css']
})
export class BureauComponent implements OnInit {

  constructor(private service : BureauService, private entreservive : EntreService ,
    private toastr : ToastrService) { 
    
  }

  ngOnInit() {
    this.resetForm();
    this.entreservive.refreshList();

  }
  resetForm(form? : NgForm){
     if(form != null)
      form.resetForm();
      this.service.formData={
      BureauID : null,
      Libelleb : '',
      identre : null 
    }
  }

  onSubmit(form: NgForm){
    if(form.value.BureauID == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postBureau(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully','BUR. Register');
      this.resetForm(form);
      this.service.refreshList();
      });

  }

  updateRecord(form: NgForm) {
    this.service.putBureau(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'BUR. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }
}
