import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-presenters',
  templateUrl: './presenters.component.html',
  styleUrls: ['./presenters.component.scss']
})
export class PresentersComponent implements OnInit {
array:any|[]
constructor(private db:AngularFireDatabase) {
  db.list('/presenters').valueChanges().subscribe(data=>{this.array=data})


  }

  ngOnInit(): void {


  }
   onClickRemove() {
    this.array.splice(0,1);
    return this.array;
  }


}
