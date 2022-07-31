import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { EditIdService } from 'src/app/services/edit-id.service';


@Component({
  selector: 'app-presenters',
  templateUrl: './presenters.component.html',
  styleUrls: ['./presenters.component.scss']
})
export class PresentersComponent implements OnInit {
array:any|[]
constructor(private db:AngularFirestore,private updaeteServ :EditIdService) {
  db.collection('/presenter').valueChanges({idField:'eventId'}).subscribe(data=>{this.array=data})


  }

  ngOnInit(): void {


  }
   onClickRemove(key :any) {
    if(confirm("do is delete this user?")){
      this.db.collection('presenters').doc( key).delete()
      console.log(key)
    }else{
      alert("you cancel delete")
    }
  }
  updateData(key:any){
    this.updaeteServ.sendId(key)

  }
//   deleteSth(key:any){

//     if(confirm("do is delete this user?")){
//     this.db.database.ref().child('/BFunctions/'+key+'/').remove()
//     console.log(key)
//   }else{
//     alert("you cancel delete")
//   }
// }

}
