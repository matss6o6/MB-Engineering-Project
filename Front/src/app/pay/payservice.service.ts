import { Injectable } from '@angular/core';
import {ShoppingCartItem} from "../shopping-cart/shopping-cart-item";

@Injectable({
  providedIn: 'root'
})
export class PayserviceService {
  private _shoppingCart:ShoppingCartItem[]=[];
  constructor() { }
  get shopingChart(){
    return this._shoppingCart;
  }
  set shopingChart(shoppingCartItems){
  this._shoppingCart = shoppingCartItems;
  }
}
