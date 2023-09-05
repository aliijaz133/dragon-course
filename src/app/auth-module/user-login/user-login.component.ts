import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;

  title: string;

  formData: any;

  userProfile = {
    email: 'aliijaz@gmail.com',
    pwd: 'abcd1234',
  };



  constructor(private router: Router, private fb: FormBuilder) {
    this.title = 'user-login';
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPwd: ['', [Validators.required, Validators.minLength(6)],
      ],
    });
    this.formData = [];
  }

  ngOnInit(): void {

  }

  userAuth(formData?: any) {

    console.log("Error")

    if (
      this.userProfile.email === this.loginForm.controls['userEmail'].value &&
      this.userProfile.pwd === this.loginForm.controls['userPwd'].value
    ) {
      this.router.navigate(['home']);
    } else if (
      this.userProfile.email !== this.loginForm.controls['userEmail'].value
    ) {
      alert('Invalid Email');
    } else if (this.userProfile.pwd !== this.loginForm.controls['userPwd'].value) {
      alert('Invalid Password');
    }
    else if (!this.loginForm.valid) {
      alert("Form filling is required")
      console.log("Error")
      return
    }
  }
}
