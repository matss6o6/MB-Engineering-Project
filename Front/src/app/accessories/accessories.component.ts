import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Accessories} from "./accessories";
import {AccessoriesService} from "./accessories.service";
import {ShoppingCheckoutService} from "../shopping-cart/shopping-checkout.service";
import {ProductType} from "../shopping-cart/shopping-cart-item";
import {LoginuserService} from "../login/loginuser.service";

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit{
  public accessoriess!: Accessories[];
  constructor(private accessoriesService: AccessoriesService, private shoppingCheckoutService: ShoppingCheckoutService, private loginUserService: LoginuserService){}

  ngOnInit() {
    this.getAccessories();
  }
  public getAccessories(): void {
    this.accessoriesService.getAccessories().subscribe(
      (response:Accessories[])=>{
        this.accessoriess = response;
        console.log(this.accessoriess)
        console.log(response)
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public searchAccessories(key: string): void {
    console.log(key);
    const results: Accessories[] = [];
    for (const accessories of this.accessoriess) {
      if (accessories.typ.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || accessories.marka.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || accessories.opis.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(accessories);
      }
    }
    this.accessoriess = results;
    if (results.length === 0 || !key) {
      this.getAccessories();
    }
  }
  public onOpenModal(accessories:Accessories, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');


    container?.appendChild(button);
    button.click();
  }
  public addtoChart(item:Accessories){
    let newItem = {  login: this.loginUserService.userLogin,
      productId: item.idAkcesoria,
      productType: item.productType}
      this.shoppingCheckoutService.addtoChart(newItem);
  }


}
