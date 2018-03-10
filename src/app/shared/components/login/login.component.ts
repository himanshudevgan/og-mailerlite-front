import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { CookieService } from '../../../shared/services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  formSubmitted = false;
  message:any;
  constructor(private authService: AuthService, private cookieService:CookieService,
      public router: Router,
   ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
  onLogin(): void {
    this.authService.login(this.formLogin.value).subscribe(
      (data) => {
        this.cookieService.create('token', data.token);
         this.router.navigate(["/mailerlite"]);
       },
       (error:any) => {
         this.message = error.message;
         this.resetForm()
       }
    );
    this.formSubmitted = true;

  }
  resetForm() { 
    this.formLogin.reset();
}
 
}
