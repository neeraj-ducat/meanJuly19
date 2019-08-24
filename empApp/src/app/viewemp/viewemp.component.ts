import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  constructor(private empService: EmpService,
    private router: Router) { }

  // Method to remove an emp from the table
  remove(emp: Emp) {
    this.empService.deleteEmp(emp.id)
    .subscribe(data => {
      this.fetchEmp();
    });
  }
  // Method to handle the click of edit button
  enableEdit(emp: Emp) {
    // index of the object is obtained
    let index = this.empService.empArray.indexOf(emp);
    // index is stored in the service
    this.empService.setIndex(index);
    // change the route to new
    this.router.navigate(['new']);
  }
  ngOnInit() {
   this.fetchEmp();
  }
  fetchEmp() {
    let obs = this.empService.loadEmployees();
    obs.subscribe((data: Emp[]) => {
      this.empService.empArray = data;
    });
  }
}
