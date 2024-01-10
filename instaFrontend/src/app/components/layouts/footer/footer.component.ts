import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
userId:any;

constructor(){
  const user:any = localStorage.getItem("user");
  const userVerify = user && JSON.parse( user )._id
this.userId = userVerify;
}

}
