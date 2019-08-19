import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../shared/utilisateur.service';
import { Utilisateur } from '../../shared/utilisateur.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {

  constructor(private service : UtilisateurService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(uti : Utilisateur){
    this.service.formData = Object.assign({},uti);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteUtilisateur(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'UTILISATEUR. Register');
      });
    }
  }

}
