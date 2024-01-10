import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 4;
_user = new EventEmitter<any>();
backendURL = "http://localhost:3000";

  constructor(private _http : HttpClient,private _snackBar: MatSnackBar) {
    this._profileInfo();
   }

_userLogin(loginData:any){
return this._http.post(`${this.backendURL}/loginInFrontEnd`,loginData);
}

_userRegister(registerData:any){
  return this._http.post(`${this.backendURL}/register`, registerData);
}

_profileInfo(){
  const user:any = localStorage.getItem("user");
  const userVerify = user && JSON.parse( user )._id
  if(userVerify){
this._http.get(`${this.backendURL}/profile`).subscribe((res:any)=>{
 const findUser = res.user.filter((results:any)=>{
return results._id === userVerify;
});
console.log("findUser From Service",findUser);
this._user.emit(findUser);
});
  }
}

_openSnackBar(result:any,message:any) {
  this._snackBar.open(result,message, {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000,
  });
}



}
