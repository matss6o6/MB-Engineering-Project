import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AddShoppingCartItemDTO, ShoppingCartItem} from "./shopping-cart-item";

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public addItemToChart(body: AddShoppingCartItemDTO) {
    return this.http.post(this.apiServerUrl + "/shopping-cart/add-item", body)
  }
  public removeItemFromChart(shoppingCartItemId: number){
    return this.http.delete(this.apiServerUrl + "/shopping-cart/"+shoppingCartItemId);
  }
  public getChart(userLogin: string){
    return this.http.get<ShoppingCartItem[]>(this.apiServerUrl + "/shopping-cart/"+userLogin)

  }
}
