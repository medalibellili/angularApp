import { Component, OnInit } from '@angular/core';
import { TyypeService } from '../../shared/tyype.service';
import { Tyype } from '../../shared/tyype.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tyype-list',
  templateUrl: './tyype-list.component.html',
  styleUrls: ['./tyype-list.component.css']
})
export class TyypeListComponent implements OnInit {

  constructor(private service : TyypeService,private toastr : ToastrService) { 
    
  }

  ngOnInit() {
    
    this.service.refreshList();
    
  }
  populateForm(tyype : Tyype){
    this.service.formData = Object.assign({},tyype);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteTyype(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'TYPE. Register');
      });
    }
  }

}
