import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user-model';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  // to users uses array from the parent
  @Input() usersToBeDisplayed: User[];

  // to give the selected user to the parent
  @Output() selected = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  userSelected(user: User) {
    // event is generated to provide the selected user to the parent
    this.selected.emit(user);
  }
}
