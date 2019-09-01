import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [
    {name: 'Amit', email: 'amit@gmail.com', password: '1234',role:'user'},
    {name: 'Raman', email: 'raman@gmail.com', password: '1234',role:'admin'},
  ];
  // currently logged in user
  user: User;

  constructor() { }

  authenticate(email:string, pwd: string) : User {
    this.user = null;
    for(let i =0; i < 2; i++) {
      if(this.users[i].email === email && this.users[i].password === pwd) {
        this.user = this.users[i];
       break;
      }
    }
    return this.user;
  }
}
