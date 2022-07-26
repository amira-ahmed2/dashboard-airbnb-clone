import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { UserComponent } from './components/user/user/user.component';
import { PresentersComponent } from './components/presenters/presenters.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { AdminsComponent } from './components/admins/admins.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
import { UserUpdatesComponent } from './components/userUpdate/user-updates/user-updates.component';
import { PresenterUpdateComponent } from './components/presenterUpdate/presenter-update/presenter-update.component';
import { AcceptedDataComponent } from './components/accepted-data/accepted-data.component';
import { RejectedDataComponent } from './components/rejected-data/rejected-data.component';
import { StatesComponent } from './components/states/states.component';
const routes: Routes = [
  {path:'go',component:FirstpageComponent},
  {path:'',component:MainlayoutComponent,children:[
    {path:'',redirectTo:'/go',pathMatch:'full'},
    {path:'users',component:UserComponent},
    {path:'presenter',component:PresentersComponent},
    {path:'accepted',component:AcceptedDataComponent},
    {path:'rejected',component:RejectedDataComponent},
    {path:'admins',component:AdminsComponent},
    {path:'edit_user',component:UserUpdatesComponent},
    {path:'edit',component:PresenterUpdateComponent},
    {path:'newAdmin/id',component:NewAdminComponent},
    {path:'state',component:StatesComponent}

  ]},
  {path:'**',component:NotfoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
