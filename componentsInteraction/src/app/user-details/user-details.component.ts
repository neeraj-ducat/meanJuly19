import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-model';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // to receive selected user from the parent
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
