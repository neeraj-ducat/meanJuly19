import { Injectable } from '@angular/core';
import { Emp } from './emp.entity';


@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  // index of the object to be edited
  editIndex: number = -1;

  // Array of emp objects
  empArray : Emp[];
  constructor() {
    // load employees from the localstorage into the array
  
    // If no data is loaded, create an empty array
    if(this.empArray == null)
    this.empArray = Array();
   }

   saveArrayToStorage() {
    
   } 
  setIndex(index: number) {
    this.editIndex = index;
  } 

  // method to update an emp
  update(e: Emp) {
    // Remove the old object from the index and insert the new
    this.empArray.splice(this.editIndex, 1, e);
    // set the editIndex back to -1
    this.editIndex = -1;
  }
}
