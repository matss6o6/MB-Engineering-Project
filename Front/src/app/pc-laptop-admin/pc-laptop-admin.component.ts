import {Component, OnInit} from '@angular/core';
import {Computers} from "./computers";
import {ComputersService} from "./computers.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-pc-laptop-admin',
  templateUrl: './pc-laptop-admin.component.html',
  styleUrls: ['./pc-laptop-admin.component.scss']
})
export class PcLaptopAdminComponent implements OnInit {
  public computerss!: Computers[];
  public editComputers: Computers;
  public deleteComputers: Computers;
  constructor(private computerService: ComputersService){};

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

  public onAddComputers(addForm: NgForm): void {

    document.getElementById('add-computers-form')?.click();
    this.computerService.addComputers(addForm.value).subscribe(
      (response: Computers) => {
        console.log(response);
        this.getComputers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateComputers(computers: Computers): void {
    this.computerService.updateComputers(computers).subscribe(
      (response: Computers) => {
        console.log(response);
        this.getComputers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteComputers(computersId: number): void {
    this.computerService.deleteComputers(computersId).subscribe(
      (response: void) => {
        console.log(response);
        this.getComputers();
      },
      (error: HttpErrorResponse) => {
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

  public onOpenModale(computers:Computers | null | undefined, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addComputersModal');
    }


    container?.appendChild(button);
    button.click();
  }
  public onOpenModal(computers:Computers, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if (mode === 'edit') {
      this.editComputers = computers;
      button.setAttribute('data-target', '#updateComputersModal');
    }
    if (mode === 'delete') {
      this.deleteComputers = computers;
      button.setAttribute('data-target', '#deleteComputersModal');
    }

    container?.appendChild(button);
    button.click();
  }


}
