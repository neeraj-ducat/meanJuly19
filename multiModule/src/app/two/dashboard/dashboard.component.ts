import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:User;
  constructor(private auth: AuthService) { 
    this.user = auth.user;
  }

  ngOnInit() {
  }

}
