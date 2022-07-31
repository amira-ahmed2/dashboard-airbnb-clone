import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditIdService {
  recivedId: any
  constructor() { }
  sendId(key:string){
    this.recivedId = key
  }
}
