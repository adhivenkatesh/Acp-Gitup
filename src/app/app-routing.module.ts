import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeMoverPanelComponent } from './home-mover-panel/home-mover-panel.component';
import { ContactComponent } from './contact/contact.component';
import { ProviderPanelComponent } from './provider-panel/provider-panel.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LogoutComponent } from './logout/logout.component';


export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'Login'},
  {path:'Login',component:LoginComponent},
  {path:'Admin',component:AdminPanelComponent},
  {path:'Home',component:HomeMoverPanelComponent},
  {path:'HomeDetails/:id',component:HomedetailsComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Provider',component:ProviderPanelComponent},
  {path:'Logout',component:LogoutComponent},
  {path:'**',component:ErrorpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export default routes;
