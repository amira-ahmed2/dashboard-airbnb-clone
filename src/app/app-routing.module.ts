import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { UserComponent } from './components/user/user/user.component';
import { PresentersComponent } from './components/presenters/presenters.component';
import { EditdataComponent } from './components/editdata/editdata.component';
const routes: Routes = [

  {path:'',component:MainlayoutComponent,children:[
    {path:'',redirectTo:'/users',pathMatch:'full'},
  {path:'users',component:UserComponent},
  {path:'presenter',component:PresentersComponent},
  {path:'users/id',component:EditdataComponent},
  {path:'presenter/id',component:EditdataComponent}

  ]},
  {path:'**',component:NotfoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
