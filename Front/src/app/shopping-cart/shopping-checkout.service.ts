import { Injectable } from '@angular/core';
import {ShoppingServiceService} from "./shopping.service.service";
import {AddShoppingCartItemDTO} from "./shopping-cart-item";

@Injectable({
  providedIn: 'root'
})

export class ShoppingCheckoutService {

  constructor(private ShopppingRestService: ShoppingServiceService) { }
public addtoChart(item:AddShoppingCartItemDTO){
    console.log(item)
    this.ShopppingRestService.addItemToChart(item).subscribe(()=>{console.log("Dodano do koszyka")})
}
public removeFromChart(shoppingCartItemId: number){

    return this.ShopppingRestService.removeItemFromChart(shoppingCartItemId)


}
}
