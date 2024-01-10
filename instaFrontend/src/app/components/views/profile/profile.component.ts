import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  logoutBtnDisplay = 'none';
  user:any;

  constructor(private _userService: UserService, private _route: Router) { }

  ngOnInit(): void {
    this._getUserInfo();
  }

  _getUserInfo() {
    const user: any = localStorage.getItem("user");
    const userVerify = user && JSON.parse(user)._id;
    if(userVerify){
      this._userService._user.subscribe((res)=>{
        this.user = res[0];
        console.log(res[0],"profile from component");
       
      })
      
    }
  }


  toggleMenu() {
    const logoutBtn = document.getElementById('logoutBtn');

    if (logoutBtn) {
      this.logoutBtnDisplay = (this.logoutBtnDisplay === 'none' || this.logoutBtnDisplay === '') ? 'block' : 'none';
    }
  }

  logout(){
    localStorage.removeItem("user");
this._route.navigateByUrl('/login');
  }

}

