import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presenters',
  templateUrl: './presenters.component.html',
  styleUrls: ['./presenters.component.scss']
})
export class PresentersComponent implements OnInit {
array:any
  constructor() { 

    this.array=[
      {name:"mostafa", nationalID:"111111111",mobile:"01015981398", email:"hfg@gmail.ccom",password:"123456",company:"pharco",age:"25",address:"cairo"},
      {name:"ahmed", nationalID:"22222222",mobile:"01154548555", email:"ooo@gmail.ccom",password:"52148",company:"bbc",age:"35",address:"alex"},
      {name:"mohamed", nationalID:"44444444",mobile:"015447855", email:"moh@gmail.ccom",password:"95874",company:"google",age:"30",address:"Giza"},
    ]
    
  }

  ngOnInit(): void {

    
  }

}
