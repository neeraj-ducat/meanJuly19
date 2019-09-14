import { Injectable } from '@angular/core';
import { Emp } from './emp.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_url ='http://localhost:3000/emps';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  // index of the object to be edited
  editIndex: number = -1;

  // Array of emp objects
  empArray : Emp[];
  constructor(private httpClient: HttpClient) {
    // load employees from the localstorage into the array
  
    // If no data is loaded, create an empty array
    if(this.empArray == null)
    this.empArray = Array();
   }

   
  setIndex(index: number) {
    this.editIndex = index;
  } 

  // Method to load data from the API
  loadEmployees() :Observable<Emp[]> {
      return this.httpClient.get<Emp[]>(api_url);
  }
  // Method to save emp to the API
  saveEmployee(emp : Emp) :Observable<Emp> {
    return this.httpClient.post<Emp>(api_url,emp);
  }
  // Method to update emp to the API
  updateEmployee(emp : Emp) :Observable<Emp> {
    console.log('updating emp with id '+emp._id);
    return this.httpClient.put<Emp>(api_url,emp);
  }
  // Method to update emp to the API
  deleteEmp(id : number) :Observable<Emp> {
    console.log('deleting emp with id '+id);
    let delteUrl = api_url+"/"+id;
    return this.httpClient.delete<Emp>(delteUrl);
  }
}
