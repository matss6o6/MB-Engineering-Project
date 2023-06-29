import {Component, OnInit} from '@angular/core';
import {Procesors} from "./procesors";
import {ProcesorsService} from "./procesors.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ShoppingCheckoutService} from "../shopping-cart/shopping-checkout.service";
import {LoginuserService} from "../login/loginuser.service";

@Component({
  selector: 'app-processors',
  templateUrl: './processors.component.html',
  styleUrls: ['./processors.component.scss']
})
export class ProcessorsComponent implements OnInit {

  public procesorss!: Procesors[];
  constructor(private procesorsService: ProcesorsService, private shoppingCheckoutService: ShoppingCheckoutService, private loginUserService: LoginuserService){}

  ngOnInit() {
    this.getProcesors();
  }
  public getProcesors(): void {
    this.procesorsService.getProcesors().subscribe(
      (response:Procesors[])=>{
        this.procesorss = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );

  }

  public searchProcesorss(key: string): void {
    console.log(key);
    const results: Procesors[] = [];
    for (const procesors of this.procesorss) {
      if (procesors.model.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || procesors.gprocesora.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || procesors.taktowanie.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || procesors.cache.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(procesors);
      }
    }
    this.procesorss = results;
    if (results.length === 0 || !key) {
      this.getProcesors();
    }
  }

  public onOpenModal(procesors:Procesors, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');


    container?.appendChild(button);
    button.click();
  }
  public addtoChart(item:Procesors){
    let newItem = { login: this.loginUserService.userLogin,
    productId: item.idProcesora,
    productType: item.productType}
    this.shoppingCheckoutService.addtoChart(newItem);
  }
}
