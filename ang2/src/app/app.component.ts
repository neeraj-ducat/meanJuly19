import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties to store form values
  num1: string;
  num2: string;
  // properties to store the result
  result: number;
  // property to control the display of result
  flag: boolean = true;
  // Method to calculate the sum
  doSum() {
    this.result = parseInt(this.num1) + parseInt(this.num2);
    this.flag = false;
  }
}
