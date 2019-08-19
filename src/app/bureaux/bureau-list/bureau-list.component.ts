import { Component, OnInit } from '@angular/core';
import { BureauService } from '../../shared/bureau.service';
import { Bureau } from '../../shared/bureau.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bureau-list',
  templateUrl: './bureau-list.component.html',
  styleUrls: ['./bureau-list.component.css']
})
export class BureauListComponent implements OnInit {

  constructor(private service : BureauService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(bur : Bureau){
    this.service.formData = Object.assign({},bur);
   
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteBureau(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
}
