import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  registerUser: FormGroup;

constructor(private _formBuilder: FormBuilder, private _userService: UserService, private _router:Router){
  this.registerUser = this._formBuilder.group({
    name : this._formBuilder.control('',[Validators.required]),
    username : this._formBuilder.control('',[Validators.required]),
    email : this._formBuilder.control('',[Validators.required]),
    password : this._formBuilder.control('',[Validators.required])
  });
}

userRegister(){
if(this.registerUser.valid){
  console.log(this.registerUser.value);
  const registerUserValue = this.registerUser.value;
  this._userService._userRegister(registerUserValue).subscribe((res)=>{
    console.log(res,"register");
    this._router.navigateByUrl('/login');
  })
  
}
}
}
