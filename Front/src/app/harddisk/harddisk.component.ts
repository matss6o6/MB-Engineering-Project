import {Component, OnInit} from '@angular/core';
import {Disc} from "./disc";
import {HttpErrorResponse} from "@angular/common/http";
import {DiscService} from "./disc.service";
import {ShoppingCheckoutService} from "../shopping-cart/shopping-checkout.service";
import {LoginuserService} from "../login/loginuser.service";

@Component({
  selector: 'app-harddisk',
  templateUrl: './harddisk.component.html',
  styleUrls: ['./harddisk.component.scss']
})
export class HarddiskComponent implements OnInit {

  public discs!: Disc[];
  constructor(private discService: DiscService, private shoppingCheckoutService: ShoppingCheckoutService, private loginUserService: LoginuserService){}

  ngOnInit() {
    this.getDisc();
  }
  public getDisc(): void {
    this.discService.getDisc().subscribe(
      (response:Disc[])=>{
        this.discs = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );

  }
  public searchDiscs(key: string): void {
    console.log(key);
    const results: Disc[] = [];
    for (const disc of this.discs) {
      if (disc.model.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || disc.pojemnosc.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || disc.interfejs.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || disc.pzapisu.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(disc);
      }
    }
    this.discs = results;
    if (results.length === 0 || !key) {
      this.getDisc();
    }
  }
  public onOpenModal(disc:Disc, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');


    container?.appendChild(button);
    button.click();
  }
  public addtoChart(item:Disc){
    let newItem = { login: this.loginUserService.userLogin,
    productId: item.idTwarde,
    productType: item.productType}
    this.shoppingCheckoutService.addtoChart(newItem);
  }
}
