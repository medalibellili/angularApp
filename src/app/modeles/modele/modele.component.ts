import { Component, OnInit } from '@angular/core';
import { ModeleService } from '../../shared/modele.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MarqueService } from '../../shared/marque.service';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent implements OnInit {
  lists = [];
  marquesLists = [];
  typesLists = [];
  constructor(private service: ModeleService, private marqueservice: MarqueService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.marqueservice.refreshList().then(res => {
      this.lists = res
      console.log(this.lists);
      this.formatTable(this.lists);
      console.log(this.marquesLists);
    });
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ModeleID: null,
      LibelleModele: '',
      idmarque: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.ModeleID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);

  }

  insertRecord(form: NgForm) {
    this.service.postModele(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'MODELE. Register');
      this.resetForm(form)
      this.service.refreshList();
    });

  }

  updateRecord(form: NgForm) {
    this.service.putModele(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'MODELE. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }
  formatTable(lists) {

    for (let i = 0; i < lists.length; i++) {
      for (let j = i; j < lists.length; j++) {
        if(lists[i].LibelleMarque !== lists[j].LibelleMarque) {
          this.marquesLists.push(lists[i].LibelleMarque);
        }
        if ((lists[i].LibelleMarque === lists[j].LibelleMarque) && (lists[i].Libelle !== lists[j].Libelle)) {
          this.marquesLists.push(lists[i].LibelleMarque);
        } else {

        }
      }
    }
  }
}
