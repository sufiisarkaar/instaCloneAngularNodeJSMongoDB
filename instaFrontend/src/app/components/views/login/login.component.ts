import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(private _userService: UserService, private _formBuilder: FormBuilder, private _route:Router) {
    this.loginForm = this._formBuilder.group({
      username: this._formBuilder.control('', [Validators.required]),
      password: this._formBuilder.control('', [Validators.required])
    });
  }

  login() {
    const _loginData = this.loginForm.value;
    this._userService._userLogin(_loginData).subscribe((res: any) => {
      if (res.success) {
        const user = res.user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(res, "login Response");
        this._userService._openSnackBar(res.success, 'close');
        this._route.navigateByUrl('/feed');
      } if (res.failed) {
        console.log(res, "login Response");
        this._userService._openSnackBar(res.failed, 'close')
      } if (res.error) {
        console.log(res, "login Response");
        this._userService._openSnackBar(res.error, 'close')
      }
    });
  }





}
