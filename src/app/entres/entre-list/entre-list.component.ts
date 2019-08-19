import { Component, OnInit } from '@angular/core';
import { EntreService } from '../../shared/entre.service';
import { Entre } from '../../shared/entre.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-entre-list',
  templateUrl: './entre-list.component.html',
  styleUrls: ['./entre-list.component.css']
})
export class EntreListComponent implements OnInit {

  constructor(private service : EntreService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(ent : Entre){
    this.service.formData = Object.assign({},ent);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEntre(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
}
