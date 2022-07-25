import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/compat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
array:any|[]
key:number=0

  constructor(private db:AngularFireDatabase,private router:Router) {
    db.list('/users').valueChanges().subscribe(data=>{this.array=data})


  }

  ngOnInit(): void {


  }
// start delete user
  deleteSth(key:any){
    if(confirm("do is delete this user?")){
    this.db.database.ref().child('/BFunctions/'+key+'/').remove()
    console.log(key)
  }else{
    alert("you cancel delete")
  }
}
// end delete
// start go to page updata
edituser(id:number){
  this.router.navigate(['./users',id])
}
// end go to page updata


}
