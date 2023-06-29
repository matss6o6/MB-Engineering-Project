import {Component, OnInit} from '@angular/core';
import {PayserviceService} from "./payservice.service";
import {Router} from "@angular/router";
import {LoginuserService} from "../login/loginuser.service";
import {OrdersServiceService} from "../orders/orders.service.service";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit{
public nameandsurname: string= "";
public street: string= "";
public email: string="";
public phonenumber: string="";
  constructor(private payservice: PayserviceService,
              private router: Router,
              private loginservice: LoginuserService,
              private orderService:OrdersServiceService) {}
  ngOnInit() {
  }

  goToOdbior() {

    this.orderService.addOrder({
      uzytkownik:this.loginservice.userLogin,
      nameAndSurname:this.nameandsurname,
      street:this.street,
      phoneNumber:this.phonenumber,
      email:this.email,
      items:this.payservice.shopingChart

    })
      .subscribe(()=>console.log("Zrealizowano zamowienie"))
    this.router.navigate(["/odbior"])

  }
}
