import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../../shared/marque.service';
import { Marque } from '../../shared/marque.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.css']
})
export class MarqueListComponent implements OnInit {

  constructor(private service : MarqueService,private toastr : ToastrService) { 
    
  }

  ngOnInit() {
    
   const lists =  this.service.refreshList();

    console.log('Marques: ',lists);
    
  }
  populateForm(marq : Marque){
    this.service.formData = Object.assign({},marq);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteMarque(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Marq. Register');
      });
    }
  }

}
