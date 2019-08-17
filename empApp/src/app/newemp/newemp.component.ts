import { Component, OnInit, OnDestroy } from '@angular/core';
import { Emp } from '../emp.entity';
import { EmpService } from '../emp.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit, OnDestroy {

  // object to receive form data
  emp: Emp;
  constructor(private empService : EmpService,
    private alertService: AlertService,
    private router: Router) {
    this.emp = new Emp();
    console.log("New component is created.");
   }

   // method to save the emp to the service array
  saveEmp(form: FormGroup) {

    if(form.invalid) {
      // Mark the input fields of the form as dirty
      for(let i in form.controls)
          form.controls[i].markAsTouched();
    }
    else {
    // copy of the emp object is created
    let newEmp = Object.assign({},this.emp);
    // copied object is added to the service so
    // that it remain detached from the form.
    this.empService.empArray.push(newEmp);
    // save the array to the storage
    
    // alert message is displayed
    this.alertService.success('successfully added.');
    this.clearForm();
    }
  }
  clearForm() {
     // Input form is emptied
     this.emp.name="";
     this.emp.job="";
     this.emp.salary=0;
  }
  ngOnInit() {
    // If editIndex is valid in empService, assign the indexed object
    // to emp so that its values are bound to the input form.
    if(this.empService.editIndex >= 0 )
      this.emp = this.empService.empArray[this.empService.editIndex];
    console.log("New component is initialized.");

  }
  updateEmp() {
    // object to be updated is given to the service
    this.empService.update(this.emp);
    // save the array to the storage
    
    // route is changed to view
    this.router.navigate(['view']);
  }
  ngOnDestroy() {
    console.log("New component is destroyed.");
  }
}
