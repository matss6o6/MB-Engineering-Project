import { Component, OnInit } from '@angular/core';
import {Accessories} from "../accessories/accessories";
import {AccessoriesService} from "../accessories/accessories.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-accessories-admin',
  templateUrl: './accessories-admin.component.html',
  styleUrls: ['./accessories-admin.component.scss']
})
export class AccessoriesAdminComponent implements OnInit {

  public accessoriess!: Accessories[];
  public editAccessories: Accessories;
  public deleteAccessories: Accessories;
  constructor(private accessoriesService: AccessoriesService){}


  ngOnInit() {
    this.getAccessories();
  }

  public getAccessories(): void {
    this.accessoriesService.getAccessories().subscribe(
      (response:Accessories[])=>{
        this.accessoriess = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );

  }
  public onAddAccessories(addForm: NgForm): void {

    document.getElementById('add-accessories-form')?.click();
    this.accessoriesService.addAccessories(addForm.value).subscribe(
      (response: Accessories) => {
        console.log(response);
        this.getAccessories();
        addForm.reset();
      }
    );
  }

  public onUpdateAccessories(accessories: Accessories): void {
    this.accessoriesService.updateAccessories(accessories).subscribe(
      (response: Accessories) => {
        console.log(response);
        this.getAccessories();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAccessories(accessoriesId: number): void {
    this.accessoriesService.deleteAccessories(accessoriesId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAccessories();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchAccessories(key: string): void {
    console.log(key);
    const results: Accessories[] = [];
    for (const accessories of this.accessoriess) {
      if (accessories.typ.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || accessories.marka.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || accessories.opis.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(accessories);
      }
    }
    this.accessoriess = results;
    if (results.length === 0 || !key) {
      this.getAccessories();
    }
  }
  public onOpenModale(accessories:Accessories | null | undefined, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAccessoriesModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onOpenModal(accessories:Accessories, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if (mode === 'edit') {
      this.editAccessories = accessories;
      button.setAttribute('data-target', '#updateAccessoriesModal');
    }
    if (mode === 'delete') {
      this.deleteAccessories = accessories;
      button.setAttribute('data-target', '#deleteAccessoriesModal');
    }

    container?.appendChild(button);
    button.click();
  }

}
