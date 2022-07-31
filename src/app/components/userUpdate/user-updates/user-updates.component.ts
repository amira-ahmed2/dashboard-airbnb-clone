import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { EditIdService } from 'src/app/services/edit-id.service';

@Component({
  selector: 'app-user-updates',
  templateUrl: './user-updates.component.html',
  styleUrls: ['./user-updates.component.scss']
})
export class UserUpdatesComponent implements OnInit {
key :any
singleData :any
  constructor(private idService: EditIdService, private db :AngularFirestore) { 
    this.key = this.idService.recivedId
    this.db.doc('users/'+ this.key).valueChanges().subscribe(dat=>this.singleData=dat)
  }

  ngOnInit(): void {
  }
  updateUser(data:{}){
    this.db.collection('users/').doc(this.key).update(data)
  }

}
