import {Component, OnInit} from '@angular/core';
import {Ram} from "./ram";
import {RamService} from "./ram.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-memory-ram-admin',
  templateUrl: './memory-ram-admin.component.html',
  styleUrls: ['./memory-ram-admin.component.scss']
})
export class MemoryRamAdminComponent implements OnInit {

  public rams!: Ram[];
  public editRam: Ram;
  public deleteRam: Ram;
  constructor(private ramService: RamService){}


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
  public onAddRam(addForm: NgForm): void {

    document.getElementById('add-ram-form')?.click();
    this.ramService.addRam(addForm.value).subscribe(
      (response: Ram) => {
        console.log(response);
        this.getRam();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateRam(ram: Ram): void {
    this.ramService.updateRam(ram).subscribe(
      (response: Ram) => {
        console.log(response);
        this.getRam();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteRam(ramId: number): void {
    this.ramService.deleteRam(ramId).subscribe(
      (response: void) => {
        console.log(response);
        this.getRam();
      },
      (error: HttpErrorResponse) => {
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

  public onOpenModale(ram:Ram | null | undefined, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRamModal');
    }

    container?.appendChild(button);
    button.click();
  }
  public onOpenModal(ram:Ram, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if (mode === 'edit') {
      this.editRam = ram;
      button.setAttribute('data-target', '#updateRamModal');
    }
    if (mode === 'delete') {
      this.deleteRam = ram;
      button.setAttribute('data-target', '#deleteRamModal');
    }

    container?.appendChild(button);
    button.click();
  }

}

