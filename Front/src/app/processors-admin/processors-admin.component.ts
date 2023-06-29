import {Component, OnInit} from '@angular/core';
import {Procesors} from "./procesors";
import {ProcesorsService} from "./procesors.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-processors-admin',
  templateUrl: './processors-admin.component.html',
  styleUrls: ['./processors-admin.component.scss']
})
export class ProcessorsAdminComponent implements OnInit {

  public procesorss: Procesors[];
  public editProcesors: Procesors;
  public deleteProcesors: Procesors;
  constructor(private procesorsService: ProcesorsService){};


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

  public onAddProcesors(addForm: NgForm): void {

    document.getElementById('add-procesors-form')?.click();
    this.procesorsService.addProcesors(addForm.value).subscribe(
      (response: Procesors) => {
        console.log(response);
        this.getProcesors();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateProcesors(procesors: Procesors): void {
    this.procesorsService.updateProcesors(procesors).subscribe(
      (response: Procesors) => {
        console.log(response);
        this.getProcesors();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProcesors(procesorsId: number): void {
    this.procesorsService.deleteProcesors(procesorsId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProcesors();
      },
      (error: HttpErrorResponse) => {
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
  public onOpenModale(procesors:Procesors | null | undefined, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProcesorsModal');
    }

    container?.appendChild(button);
    button.click();
  }
  public onOpenModal(procesors:Procesors, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if (mode === 'edit') {
      this.editProcesors = procesors;
      button.setAttribute('data-target', '#updateProcesorsModal');
    }
    if (mode === 'delete') {
      this.deleteProcesors = procesors;
      button.setAttribute('data-target', '#deleteProcesorsModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
