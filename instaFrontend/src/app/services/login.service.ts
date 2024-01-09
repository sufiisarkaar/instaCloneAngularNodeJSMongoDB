import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

backendURL = "http://localhost:3000";

  constructor(private _http : HttpClient) { }

_userLogin(loginData:any){
return this._http.post(`${this.backendURL}/loginInFrontEnd`,loginData);
}

_userRegister(registerData:any){
  return this._http.post(`${this.backendURL}/register`, registerData);
}
}
