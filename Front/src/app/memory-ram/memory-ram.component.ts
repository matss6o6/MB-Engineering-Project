import {Component, OnInit} from '@angular/core';
import {Ram} from "./ram";
import {RamService} from "./ram.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ShoppingCheckoutService} from "../shopping-cart/shopping-checkout.service";
import {LoginuserService} from "../login/loginuser.service";

@Component({
  selector: 'app-memory-ram',
  templateUrl: './memory-ram.component.html',
  styleUrls: ['./memory-ram.component.scss']
})
export class MemoryRamComponent implements OnInit {

  public rams!: Ram[];
  constructor(private ramService: RamService, private shoppingCheckoutService: ShoppingCheckoutService, private loginUserService: LoginuserService){}

  ngOnInit() {
    this.getRam();
  }
  public getRam(): void {
    this.ramService.getRam().subscribe(
      (response:Ram[])=>{
        this.rams = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );

  }

  public searchRams(key: string): void {
    console.log(key);
    const results: Ram[] = [];
    for (const ram of this.rams) {
      if (ram.model.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || ram.pskokowa.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || ram.taktowanie.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || ram.rpamieci.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(ram);
      }
    }
    this.rams = results;
    if (results.length === 0 || !key) {
      this.getRam();
    }
  }

  public onOpenModal(ram:Ram, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');


    container?.appendChild(button);
    button.click();
  }
  public addtoChart(item:Ram){
    let newItem = { login: this.loginUserService.userLogin,
    productId: item.idPam,
    productType: item.productType}
    this.shoppingCheckoutService.addtoChart(newItem);
  }
}
