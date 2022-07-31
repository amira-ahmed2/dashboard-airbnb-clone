import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  constructor(public auth:AngularFireAuth , public route:Router) { }

  ngOnInit(): void {
  }
  logIn(mail:any, password:any){
    this.auth.signInWithEmailAndPassword(mail,password).then(done=>{
      this.route.navigateByUrl('/users')
    }).catch(e=>{
      alert('invalid Data')
    })
  }

}
