import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp.entity';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  constructor(private empService: EmpService) { }

  // Method to remove an emp from the table
  remove(emp: Emp) {
    // index of the emp object in array is obtained
    let index = this.empService.empArray.indexOf(emp);
    // using the index object is removed from the array
    this.empService.empArray.splice(index,1);
  }
  ngOnInit() {
  }

}
