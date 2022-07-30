import { Injectable } from '@angular/core';
import { Iusers } from './../module/iusers';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  usersRef: AngularFireList<any>| undefined;;
  userRef: AngularFireObject<any> | undefined;
  private dbPath = '/users';
  // tutorialsRef: AngularFirestoreCollection<Tutorial> = null;
  constructor(private db: AngularFireDatabase) {}


   // Update
   Updateuser(user: Iusers) {
    this.userRef?.update({
      name: user.name,
      password: user.password,
      email: user.email,
      mobileNumber: user.mobile,
      age:user.age
    });
  }

}
