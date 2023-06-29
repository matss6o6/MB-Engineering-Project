import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomeLoggedUserComponent } from './home-logged-user/home-logged-user.component';
import { AboutUsLoggedUserComponent } from './about-us-logged-user/about-us-logged-user.component';
import { ContactLoggedUserComponent } from './contact-logged-user/contact-logged-user.component';
import { ComputerComponentsComponent } from './computer-components/computer-components.component';
import { PcLaptopComponent } from './pc-laptop/pc-laptop.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccessoriesAdminComponent } from './accessories-admin/accessories-admin.component';
import {CommonModule} from "@angular/common";
import {MatSliderModule} from "@angular/material/slider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatRadioModule} from "@angular/material/radio";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialogModule} from "@angular/material/dialog";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import { ComputerComponentsAdminComponent } from './computer-components-admin/computer-components-admin.component';
import { GraphicCardComponent } from './graphic-card/graphic-card.component';
import { GraphicCardAdminComponent } from './graphic-card-admin/graphic-card-admin.component';
import { HarddiskComponent } from './harddisk/harddisk.component';
import { HarddiskAdminComponent } from './harddisk-admin/harddisk-admin.component';
import { HomeLoggedAdminComponent } from './home-logged-admin/home-logged-admin.component';
import { MemoryRamComponent } from './memory-ram/memory-ram.component';
import { MemoryRamAdminComponent } from './memory-ram-admin/memory-ram-admin.component';
import { PersonalCollectionComponent } from './personal-collection/personal-collection.component';
import { PayComponent } from './pay/pay.component';
import { PcLaptopAdminComponent } from './pc-laptop-admin/pc-laptop-admin.component';
import { ProcessorsComponent } from './processors/processors.component';
import { ProcessorsAdminComponent } from './processors-admin/processors-admin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { UserlistComponent } from './userlist/userlist.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { UnAuthPageComponent } from './un-auth-page/un-auth-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactComponent,
    ForgotpassComponent,
    HomeLoggedUserComponent,
    AboutUsLoggedUserComponent,
    ContactLoggedUserComponent,
    ComputerComponentsComponent,
    PcLaptopComponent,
    AccessoriesComponent,
    AccessoriesAdminComponent,
    ComputerComponentsAdminComponent,
    GraphicCardComponent,
    GraphicCardAdminComponent,
    HarddiskComponent,
    HarddiskAdminComponent,
    HomeLoggedAdminComponent,
    MemoryRamComponent,
    MemoryRamAdminComponent,
    PersonalCollectionComponent,
    PayComponent,
    PcLaptopAdminComponent,
    ProcessorsComponent,
    ProcessorsAdminComponent,
    ShoppingCartComponent,
    OrdersComponent,
    UserlistComponent,
    OrderDetailComponent,
    UnAuthPageComponent,
  ],
    imports: [
      BrowserModule,
      CommonModule,
      NgbModule,
      FormsModule,
      AppRoutingModule,
      MatSliderModule,
      MatCheckboxModule,
      MatSortModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      HttpClientModule,
      MatStepperModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      FormsModule,
      MatRadioModule,
      MatButtonToggleModule,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatSidenavModule,
      MatMenuModule,
      MatListModule,
      MatDividerModule,
      MatGridListModule,
      MatExpansionModule,
      MatTabsModule,
      MatBadgeModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MatDialogModule,
      MatCardModule,
      MatButtonModule,
      HttpClientModule,
      MatSnackBarModule,


    ],
  providers: [    {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
