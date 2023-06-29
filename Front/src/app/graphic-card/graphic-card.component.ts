import {Component, OnInit} from '@angular/core';
import {Graphic} from "./graphic";
import {GraphicService} from "./graphic.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ShoppingCheckoutService} from "../shopping-cart/shopping-checkout.service";
import {LoginuserService} from "../login/loginuser.service";

@Component({
  selector: 'app-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.scss']
})
export class GraphicCardComponent implements OnInit {

  public graphics!: Graphic[];
  constructor(private graphicService: GraphicService, private shoppingCheckoutService: ShoppingCheckoutService, private loginUserService: LoginuserService
  ){}

  ngOnInit() {
    this.getGraphic();
  }
  public getGraphic(): void {
    this.graphicService.getGraphic().subscribe(
      (response:Graphic[])=>{
        this.graphics = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );

  }
  public searchGraphics(key: string): void {
    console.log(key);
    const results: Graphic[] = [];
    for (const graphic of this.graphics) {
      if (graphic.model.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || graphic.uklad.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || graphic.pamiec.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || graphic.zlacza.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(graphic);
      }
    }
    this.graphics = results;
    if (results.length === 0 || !key) {
      this.getGraphic();
    }
  }
  public onOpenModal(graphic:Graphic, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');


    container?.appendChild(button);
    button.click();
  }
  public addtoChart(item:Graphic){
    let newItem = { login: this.loginUserService.userLogin,
    productId: item.idGraf,
    productType: item.productType}
    this.shoppingCheckoutService.addtoChart(newItem);
  }
}

