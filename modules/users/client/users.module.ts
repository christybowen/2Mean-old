/* Vendor */
import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { HttpModule }            from '@angular/http';
import { NgbModule }             from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes }  from '@angular/router';
import { FormsModule }          from '@angular/forms';

/* Components */
import { UsersComponent }       from './components/users.component';
import {
  SigninComponent
} from './components/signin.component';
import {
  SignupComponent
} from './components/signup.component';
import { 
  ProfileComponent 
} from './components/profile.component';
import { 
  ChangePasswordComponent 
} from './components/change-password.component';
import { 
  ChangeProfilePictureComponent 
} from './components/change-profile-picture.component';
import {
  EditProfileComponent
} from './components/edit-profile.component';
import { 
  ManageSocialComponent
} from './components/manage-social.component';
import {
  SettingsComponent
} from './components/settings.component';

/* Services */
import { UserService }          from './services/user.service';
import { AuthService }          from './../../auth/client/auth.service.client';

/* Routing */
import { UsersRoutingModule }      from './config/user-routing.module';


@NgModule({
  imports:      [
    BrowserModule,
    NgbModule,
    FormsModule,
    UsersRoutingModule
  ],
  providers: [ UserService ],
  declarations: [
    UsersComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ChangeProfilePictureComponent,
    EditProfileComponent,
    ManageSocialComponent,
    SettingsComponent
  ],
  bootstrap:    [ UsersComponent ]
})

export class UsersModule {}
