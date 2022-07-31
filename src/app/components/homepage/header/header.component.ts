import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  adminPass:string|any
  adminMail: string|any
  constructor(public auth:AngularFireAuth) { }

  ngOnInit(): void {
  }

  //add admin to admin dashboard
  addAdmin(x :any,y: any){
      this.auth.createUserWithEmailAndPassword(x,y)
  }

}
