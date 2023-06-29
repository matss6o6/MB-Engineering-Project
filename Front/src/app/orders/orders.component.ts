import {Component, OnInit} from '@angular/core';
import {Orders, StatusOrder} from "./orders";
import {OrdersServiceService} from "./orders.service.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {OrderDetailComponent} from "./order-detail/order-detail.component";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent  implements OnInit{
  public orders!: Orders[];
  public deleteOrders: Orders;
  public data: Orders;
  public editOrders!: Orders;

  constructor(private ordersService: OrdersServiceService,
              private dialog:MatDialog){}

  ngOnInit(){
    this.getOrder();
  }
  public openDetails(order:Orders){
    this.dialog.open(OrderDetailComponent,{data:order})
  }
  public getOrder(): void{
    this.ordersService.getOrder().subscribe(
      (response:Orders[])=>{
        this.orders = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }


  public onDeleteOrders(zamowienieId: number): void {
    this.ordersService.deleteOrder(zamowienieId).subscribe(
      (response: void) => {
        console.log(response);
        this.getOrder();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
}
  public onOpenModal(orders:Orders, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'edit') {
      this.editOrders = orders;
      button.setAttribute('data-target', '#updateGraphicModal');
    }
    if (mode === 'delete') {
      this.deleteOrders = orders;
      button.setAttribute('data-target', '#deleteOrdersModal');
    }

    container?.appendChild(button);
    button.click();
  }

  upgradeOrder(idZamowienia: number) {
    this.ordersService.upgradeOrder(idZamowienia).subscribe(()=>{this.getOrder()},
        error => console.log(error.error))
  }

  downgradeOrder(idZamowienia: number) {
    this.ordersService.downgradeOrder(idZamowienia).subscribe(()=>{this.getOrder()},
      error => console.log(error.error))
  }
  public getStaturOrder(statusOrder: StatusOrder):string{
    switch (statusOrder){
      case StatusOrder.OCZEKIWANIE_NA_PLATNOSC:return "Oczekiwanie na płatność";
      case StatusOrder.ODBIOR:return "Odbiór";
      case StatusOrder.WYSYLKA:return "Wysyłka";
      case StatusOrder.ZATWIERDZENIE:return "Zatwierdzenie"
      default:return "";
    }

  }
}
