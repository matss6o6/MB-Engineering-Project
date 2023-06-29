import { Component } from '@angular/core';
import {Computers} from "./computers";
import {ComputersService} from "./computers.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ShoppingCheckoutService} from "../shopping-cart/shopping-checkout.service";
import {LoginuserService} from "../login/loginuser.service";

@Component({
  selector: 'app-pc-laptop',
  templateUrl: './pc-laptop.component.html',
  styleUrls: ['./pc-laptop.component.scss']
})
export class PcLaptopComponent  {
  public computerss!: Computers[];
  constructor(private computerService: ComputersService, private shoppingCheckoutService: ShoppingCheckoutService, private loginUserService: LoginuserService){}

  ngOnInit() {
    this.getComputers();
  }
  public getComputers(): void {
    this.computerService.getComputers().subscribe(
      (response:Computers[])=>{
        this.computerss = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );

  }

  public searchComputerss(key: string): void {
    console.log(key);
    const results: Computers[] = [];
    for (const computers of this.computerss) {
      if (computers.model.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || computers.system.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || computers.procesor.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || computers.kgraficzna.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(computers);
      }
    }
    this.computerss = results;
    if (results.length === 0 || !key) {
      this.getComputers();
    }
  }


  public onOpenModal(computers:Computers, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');


    container?.appendChild(button);
    button.click();
  }
  public addtoChart(item:Computers){
    let newItem = { login: this.loginUserService.userLogin,
    productId: item.idKomputera,
    productType: item.productType}
    this.shoppingCheckoutService.addtoChart(newItem);
  }

}
