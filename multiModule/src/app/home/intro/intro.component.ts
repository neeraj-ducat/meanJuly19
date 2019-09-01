import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { User } from '../../user.model';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  loginForm: FormGroup;
  // to receive form data
  user: User;
  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    /*this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    */
   this.loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  }

  login(form: FormGroup) {
   // console.log('Email', form.value.email);
   // console.log('Password', form.value.password);
   this.user = this.auth.authenticate(this.loginForm.value.email, this.loginForm.value.password); 
   if(this.user == null) {
   console.log("Invalid user.");
   } else {
    // If the role is user load module one, otherwise load module two.
      if(this.user.role === 'user')
        this.router.navigate(['one']);
      else
        this.router.navigate(['two']);
   }
  }

}
