import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp.entity';
import { EmpService } from '../emp.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {

  // object to receive form data
  emp: Emp;
  constructor(private empService : EmpService,
    private alertService: AlertService) {
    this.emp = new Emp();
   }

   // method to save the emp to the service array
  saveEmp() {
    // copy of the emp object is created
    let newEmp = Object.assign({},this.emp);
    // copied object is added to the service so
    // that it remain detached from the form.
    this.empService.empArray.push(newEmp);
    // alert message is displayed
    this.alertService.success('successfully added.');
    // Input form is emptied
    this.emp.name="";
    this.emp.job="";
    this.emp.salary=0;
  }
  ngOnInit() {
  }

}
