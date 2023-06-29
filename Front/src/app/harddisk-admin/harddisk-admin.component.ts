import {Component, OnInit} from '@angular/core';
import {Disc} from "./disc";
import {DiscService} from "./disc.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-harddisk-admin',
  templateUrl: './harddisk-admin.component.html',
  styleUrls: ['./harddisk-admin.component.scss']
})
export class HarddiskAdminComponent implements OnInit {
  public discs!: Disc[];
  public editDisc: Disc;
  public deleteDisc: Disc;
  constructor(private discService: DiscService){}


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
  public onAddDisc(addForm: NgForm): void {

    document.getElementById('add-disc-form')?.click();
    this.discService.addDisc(addForm.value).subscribe(
      (response: Disc) => {
        console.log(response);
        this.getDisc();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateDisc(disc: Disc): void {
    this.discService.updateDisc(disc).subscribe(
      (response: Disc) => {
        console.log(response);
        this.getDisc();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteDisc(discId: number): void {
    this.discService.deleteDisc(discId).subscribe(
      (response: void) => {
        console.log(response);
        this.getDisc();
      },
      (error: HttpErrorResponse) => {
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
  public onOpenModale(disc:Disc | null | undefined, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addDiscModal');
    }

    container?.appendChild(button);
    button.click();
  }
  public onOpenModal(disc:Disc, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if (mode === 'edit') {
      this.editDisc = disc;
      button.setAttribute('data-target', '#updateDiscModal');
    }
    if (mode === 'delete') {
      this.deleteDisc = disc;
      button.setAttribute('data-target', '#deleteDiscModal');
    }

    container?.appendChild(button);
    button.click();
  }


}

