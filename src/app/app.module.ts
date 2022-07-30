import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/homepage/side-bar/side-bar.component';
import { HeaderComponent } from './components/homepage/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserComponent } from './components/user/user/user.component';
import { PresentersComponent } from './components/presenters/presenters.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { EditdataComponent } from './components/editdata/editdata.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { AdminsComponent } from './components/admins/admins.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    NotfoundComponent,
    UserComponent,
    PresentersComponent,
    MainlayoutComponent,
    EditdataComponent,
    FirstpageComponent,
    AdminsComponent,
    NewAdminComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
