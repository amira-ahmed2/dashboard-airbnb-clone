import { Component, OnInit } from '@angular/core';
import { Iusers } from './../../module/iusers';
import { Router ,ActivatedRoute} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.scss']
})
export class EditdataComponent implements OnInit {
  newprd:Iusers = {} as Iusers;
  val:any;
  constructor(private router:Router ,private route: ActivatedRoute ,private proservicrapi:TutorialService) { }

  ngOnInit(): void {
  }


// updata
updatapro(){
  // this.proservicrapi.Updateuser(this.newprd).subscribe(da=>{

  // });
  this.router.navigate(['users'])
}
}
