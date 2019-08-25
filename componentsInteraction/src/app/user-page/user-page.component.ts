import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-model';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  // array to store fetched users
  users: User[];
  // object to store the selected user
  selected: User = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // load the users from the api
    this.userService.fetchUsers()
      .subscribe(data => {
        this.users = data;
      });
  }
showDetails(selectedUser: User) {
  this.selected = selectedUser;
  console.log(this.selected.name+" is selected.");
}
}
