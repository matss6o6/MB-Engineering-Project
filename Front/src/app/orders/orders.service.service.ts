import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddOrder, Orders} from "./orders";

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }
  public getOrder(): Observable<Orders[]>{
    return this.http.get<Orders[]>(`${this.apiServerUrl}/orders/all`);
  }
  public addOrder(orders: AddOrder){
    return this.http.post<Orders>(`${this.apiServerUrl}/orders/add`, orders);
  }
  public updateOrder(orders: Orders): Observable<Orders> {
    return this.http.put<Orders>(`${this.apiServerUrl}/orders/update`, orders);
  }
  public deleteOrder(ordersIdZamowienia: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/orders/delete/${ordersIdZamowienia}`);
  }
  public upgradeOrder(orderId: number){
    return this.http.put(`${this.apiServerUrl}/orders/upgrade/${orderId}`, null)
  }
  public downgradeOrder(orderId: number){
    return this.http.put(`${this.apiServerUrl}/orders/downgrade/${orderId}`, null)
  }
}
