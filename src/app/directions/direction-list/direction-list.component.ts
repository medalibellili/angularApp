import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../shared/direction.service';
import { Direction } from '../../shared/direction.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.css']
})
export class DirectionListComponent implements OnInit {

  constructor(private service : DirectionService,private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(bur : Direction){
    this.service.formData = Object.assign({},bur);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteDirection(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'DIRECTION. Register');
      });
    }
  }
}
