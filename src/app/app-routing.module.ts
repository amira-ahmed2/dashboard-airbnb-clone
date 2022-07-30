import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { UserComponent } from './components/user/user/user.component';
import { PresentersComponent } from './components/presenters/presenters.component';
import { EditdataComponent } from './components/editdata/editdata.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { AdminsComponent } from './components/admins/admins.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
const routes: Routes = [
  {path:'go',component:FirstpageComponent},
  {path:'',component:MainlayoutComponent,children:[
    {path:'',redirectTo:'/go',pathMatch:'full'},
    {path:'users',component:UserComponent},
    {path:'presenter',component:PresentersComponent},
    {path:'admins',component:AdminsComponent},
    {path:'users/id',component:EditdataComponent},
    {path:'presenter/id',component:EditdataComponent},
    {path:'newAdmin/id',component:NewAdminComponent}

  ]},
  {path:'**',component:NotfoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
