import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from "../../../../models/user";
import { UserService } from "../../../../services/user.service";

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss'],
  providers: [UserService]
})
export class BasicLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    public _userServices: UserService
  ) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // reset login status
    this._userServices.logout();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this._userServices.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        response => {
          //this._router.navigate([this.returnUrl]);
          this._router.navigateByUrl('/dashboard');
        },
        error => {
          if(error.error.message=== undefined){
            this.error='Ha ocurrido un error, contacte al administrador del sistema.';
          }
          else{
            this.error = error.error.message;
          }
          console.log(this.error);
          this.loading = false;
        }
      );
  }
}
