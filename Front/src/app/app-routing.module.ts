import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactComponent} from "./contact/contact.component";
import {ForgotpassComponent} from "./forgotpass/forgotpass.component";
import {HomeLoggedUserComponent} from "./home-logged-user/home-logged-user.component";
import {AboutUsLoggedUserComponent} from "./about-us-logged-user/about-us-logged-user.component";
import {ContactLoggedUserComponent} from "./contact-logged-user/contact-logged-user.component";
import {ComputerComponentsComponent} from "./computer-components/computer-components.component";
import {AccessoriesComponent} from "./accessories/accessories.component";
import {AccessoriesAdminComponent} from "./accessories-admin/accessories-admin.component";
import {ComputerComponentsAdminComponent} from "./computer-components-admin/computer-components-admin.component";
import {GraphicCardComponent} from "./graphic-card/graphic-card.component";
import {GraphicCardAdminComponent} from "./graphic-card-admin/graphic-card-admin.component";
import {HarddiskComponent} from "./harddisk/harddisk.component";
import {HarddiskAdminComponent} from "./harddisk-admin/harddisk-admin.component";
import {HomeLoggedAdminComponent} from "./home-logged-admin/home-logged-admin.component";
import {MemoryRamComponent} from "./memory-ram/memory-ram.component";
import {MemoryRamAdminComponent} from "./memory-ram-admin/memory-ram-admin.component";
import {PersonalCollectionComponent} from "./personal-collection/personal-collection.component";
import {PayComponent} from "./pay/pay.component";
import {PcLaptopAdminComponent} from "./pc-laptop-admin/pc-laptop-admin.component";
import {PcLaptopComponent} from "./pc-laptop/pc-laptop.component";
import {ProcessorsComponent} from "./processors/processors.component";
import {ProcessorsAdminComponent} from "./processors-admin/processors-admin.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {OrdersComponent} from "./orders/orders.component";
import {UserlistComponent} from "./userlist/userlist.component";
import {UnAuthPageComponent} from "./un-auth-page/un-auth-page.component";
import {AdminGuardGuard} from "./Guards/admin-guard.guard";
import {UserGuardGuard} from "./Guards/user-guard.guard";


const routes: Routes = [
  {path:'',pathMatch: "full",component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path: 'home-log-user', component:HomeLoggedUserComponent, canActivate:[UserGuardGuard]},
  {path:'about-log-user',component:AboutUsLoggedUserComponent, canActivate:[UserGuardGuard]},
  {path:'contact-log-user',component:ContactLoggedUserComponent, canActivate:[UserGuardGuard]},
  {path:'computer-components' ,component:ComputerComponentsComponent, canActivate:[UserGuardGuard]},
  {path:'accessories', component:AccessoriesComponent, canActivate:[UserGuardGuard]},
  {path:'accessories-admin', component:AccessoriesAdminComponent, canActivate:[AdminGuardGuard]},
  {path:'computer-components-admin', component:ComputerComponentsAdminComponent, canActivate:[AdminGuardGuard]},
  {path:'graphic-card',component:GraphicCardComponent, canActivate:[UserGuardGuard]},
  {path:'graphic-card-admin', component:GraphicCardAdminComponent, canActivate:[AdminGuardGuard]},
  {path:'hard-disk', component:HarddiskComponent, canActivate:[UserGuardGuard]},
  {path:'hard-disk-admin', component:HarddiskAdminComponent, canActivate:[AdminGuardGuard]},
  {path:'home-log-admin', component:HomeLoggedAdminComponent, canActivate:[AdminGuardGuard]},
  {path:'memory-ram', component:MemoryRamComponent, canActivate:[UserGuardGuard]},
  {path:'memory-ram-admin', component:MemoryRamAdminComponent, canActivate:[AdminGuardGuard]},
  {path:'odbior', component:PersonalCollectionComponent,canActivate:[UserGuardGuard] },
  {path:'pay', component:PayComponent, canActivate:[UserGuardGuard]},
  {path:'pc-laptop', component:PcLaptopComponent, canActivate:[UserGuardGuard]},
  {path:'processors', component:ProcessorsComponent, canActivate:[UserGuardGuard]},
  {path:'pc-laptop-admin', component:PcLaptopAdminComponent, canActivate:[AdminGuardGuard]},
  {path:'processors-admin', component:ProcessorsAdminComponent, canActivate:[AdminGuardGuard]},
  {path:'shopcart', component:ShoppingCartComponent, canActivate:[UserGuardGuard]},
  {path:'orders', component:OrdersComponent, canActivate:[AdminGuardGuard]},
  {path:'userlist', component:UserlistComponent, canActivate:[AdminGuardGuard]},
  {path:'unauthorized-page', component:UnAuthPageComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
