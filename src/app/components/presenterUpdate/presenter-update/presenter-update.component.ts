import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { EditIdService } from 'src/app/services/edit-id.service';

@Component({
  selector: 'app-presenter-update',
  templateUrl: './presenter-update.component.html',
  styleUrls: ['./presenter-update.component.scss']
})
export class PresenterUpdateComponent implements OnInit {
key :any
singleData :any
  constructor(private idService: EditIdService, private db :AngularFirestore) { 
      this.key = this.idService.recivedId
      this.db.doc('presenter/'+ this.key).valueChanges().subscribe(dat=>this.singleData=dat)
    }

  ngOnInit(): void {
  }
  updatePresenter(data:{}){
    this.db.collection('presenter/').doc(this.key).update(data)
  }

}
