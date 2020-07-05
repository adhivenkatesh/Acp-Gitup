import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { HomeMoverPanelComponent } from './home-mover-panel/home-mover-panel.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule,FormGroup, Validators,FormControl,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import routes from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ProviderPanelComponent } from './provider-panel/provider-panel.component';
import { HomeMover } from 'src/DBLayer/ServiceLayer/HomeMover.service';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LogoutComponent } from './logout/logout.component';
import { TitleheaderService } from 'src/DBLayer/ServiceLayer/titleheader.service';
import { FacadeCommonService } from 'src/DBLayer/Shared/facade-common.service';



@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    LoginComponent,
    HomeMoverPanelComponent,
    ContactComponent,
    ProviderPanelComponent,
    HomedetailsComponent,
    ErrorpageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [HomeMover,
    //TitleheaderService,
    FacadeCommonService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
