import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/compat';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { EditIdService } from 'src/app/services/edit-id.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
array:any|[]
key:number=0

  constructor(private db:AngularFirestore,private router:Router, private updaeteServ :EditIdService) {
    db.collection('/users').valueChanges({idField:'eventId'}).subscribe(data=>{this.array=data})


  }

  ngOnInit(): void {


  }
// start delete user
//   deleteSth(key:any){
  //   if(confirm("do is delete this user?")){
  //     this.db.collection('users').doc( key).delete()
  //   console.log(key)
  // }else{
  //   alert("you cancel delete")
  // }
// }
onClickRemove(key:any) {
  if(confirm("do is delete this user?")){
    this.db.collection('users').doc( key).delete()
  console.log(key)
}else{
  alert("you cancel delete")
}
}
// end delete
// start go to page updata
edituser(key:any){
 this.updaeteServ.sendId(key)
}
// end go to page updata


}
