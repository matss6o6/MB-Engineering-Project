import {Component, OnInit} from '@angular/core';
import {LoginuserService} from "../login/loginuser.service";
import {ShoppingServiceService} from "./shopping.service.service";
import {ShoppingCartItem} from "./shopping-cart-item";
import {ShoppingCheckoutService} from "./shopping-checkout.service";
import {Router} from "@angular/router";
import {PayserviceService} from "../pay/payservice.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit{
  public shoppingCart:ShoppingCartItem[]=[];
  constructor(private loginUserService: LoginuserService,
              private shoppingRestService: ShoppingServiceService,
              private shoppingChartCheckoutService: ShoppingCheckoutService,
              private router:Router,
              private payservice: PayserviceService) {
  }

  ngOnInit(): void {
  this.loadShoppingCartItems();
  }
  public removeFromCart(shoppingCartItemId: number){
    this.shoppingChartCheckoutService.removeFromChart(shoppingCartItemId).subscribe(()=>{this.loadShoppingCartItems()})
  }
  public loadShoppingCartItems(){
    console.log(this.loginUserService.userLogin)
    this.shoppingRestService.getChart(this.loginUserService.userLogin).subscribe(items=>{
        this.shoppingCart=items;
        console.log(this.shoppingCart)

      },error => {console.log(error.error)}
    )
  }
  public sum(){
    let sum=0;
    this.shoppingCart.forEach(item=>{
      sum+=item.price*item.quantity;
    })
    return sum;
  }
  public goToRealization(){
    this.payservice.shopingChart=this.shoppingCart
    this.router.navigate(["/pay"])

  }
}
