import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BasicService } from '../../shared/services/basic.service';
import { CookieService } from '../../shared/services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  formSubmitted = false;
  message:any;
  constructor(private basicservice: BasicService, private cookieService:CookieService,
      public router: Router,
   ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      companyemail: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
  onFormSubmit(): void {
    this.basicservice.login(this.userForm.value).subscribe(
      (data) => {
        this.cookieService.create('token', data.data.token);
         this.router.navigate(["/"])
         console.log(data)
       },
       (error:any) => {
         console.log(error)
         if (error.message="Email is invalid"){
         this.message="Login Unsucessfull"
        }
       
       }
    );
    
    this.formSubmitted = true;

  }
 
}
