import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../../shared/fournisseur.service';
import { Fournisseur } from '../../shared/fournisseur.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {

  constructor(private service : FournisseurService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(four : Fournisseur){
    this.service.formData = Object.assign({},four);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteFournisseur(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'four. Register');
      });
    }
  }
}
