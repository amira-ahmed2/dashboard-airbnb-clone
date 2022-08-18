import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EditIdService } from 'src/app/services/edit-id.service';

@Component({
  selector: 'app-accepted-data',
  templateUrl: './accepted-data.component.html',
  styleUrls: ['./accepted-data.component.scss']
})
export class AcceptedDataComponent implements OnInit {
  array:any|[]
  constructor(private db:AngularFirestore,private updaeteServ :EditIdService) {
    db.collection('/Requests').valueChanges({idField:'eventId'}).subscribe(data=>{this.array=data})
  
  
    }

  ngOnInit(): void {
  }
  onClickRemove(key :any) {
    if(confirm("do is delete this host?")){
      

      this.db.collection('Rejected').doc( key).delete()
    }else{
      alert("you cancel delete")
    }
  }

}
