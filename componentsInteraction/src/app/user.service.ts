import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user-model';

const api_url = 'https://jsonplaceholder.typicode.com/users';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // To Fetch users 
  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(api_url);
  }
}
