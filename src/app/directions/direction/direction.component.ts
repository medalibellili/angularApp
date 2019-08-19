import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../shared/direction.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Direction } from '../../shared/direction.model';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  constructor(private service : DirectionService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData={
      DirectionID : null,
      Libelle : ''
    }  }

    onSubmit(form: NgForm){
      if(form.value.DirectionID == null)
      this.insertRecord(form);
      else
      this.updateRecord(form);
    }
    
    insertRecord(form: NgForm){
      this.service.postDirection(form.value).subscribe(res => {
        this.toastr.success('Inserted successfully','DIRECTION. Register');
        this.resetForm(form)
        this.service.refreshList();
        });
    }
    updateRecord(form: NgForm) {
      this.service.putDirection(form.value).subscribe(res => {
        this.toastr.info('Updated successfully', 'DIRECTION. Register');
        this.resetForm(form);
        this.service.refreshList();
      });
  
    }

 
}
