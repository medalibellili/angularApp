import { Component, OnInit } from '@angular/core';
import { ModeleService } from '../../shared/modele.service';
import { Modele } from '../../shared/modele.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modele-list',
  templateUrl: './modele-list.component.html',
  styleUrls: ['./modele-list.component.css']
})
export class ModeleListComponent implements OnInit {

  constructor(private service : ModeleService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(modelee : Modele){
    this.service.formData = Object.assign({},modelee);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteModele(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'MODELE. Register');
      });
    }
  }
}
