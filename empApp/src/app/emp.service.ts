import { Injectable } from '@angular/core';
import { Emp } from './emp.entity';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  // Array of emp objects
  empArray : Emp[];
  constructor() {
    this.empArray = Array();
   }
}
