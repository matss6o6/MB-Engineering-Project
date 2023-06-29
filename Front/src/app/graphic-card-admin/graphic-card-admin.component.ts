import {Component, OnInit} from '@angular/core';
import {Graphic} from "./graphic";
import {GraphicService} from "./graphic.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-graphic-card-admin',
  templateUrl: './graphic-card-admin.component.html',
  styleUrls: ['./graphic-card-admin.component.scss']
})
export class GraphicCardAdminComponent implements OnInit {

  public graphics!: Graphic[];
  public editGraphic: Graphic;
  public deleteGraphic: Graphic;
  constructor(private graphicService: GraphicService){}

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

  public onAddGraphic(addForm: NgForm): void {

    document.getElementById('add-graphic-form')?.click();
    this.graphicService.addGraphic(addForm.value).subscribe(
      (response: Graphic) => {
        console.log(response);
        this.getGraphic();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateGraphic(graphic: Graphic): void {
    this.graphicService.updateGraphic(graphic).subscribe(
      (response: Graphic) => {
        console.log(response);
        this.getGraphic();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteGraphic(graphicId: number): void {
    this.graphicService.deleteGraphic(graphicId).subscribe(
      (response: void) => {
        console.log(response);
        this.getGraphic();
      },
      (error: HttpErrorResponse) => {
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
  public onOpenModale(graphic:Graphic | null | undefined, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addGraphicModal');
    }

    container?.appendChild(button);
    button.click();
  }
  public onOpenModal(graphic:Graphic, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if (mode === 'edit') {
      this.editGraphic = graphic;
      button.setAttribute('data-target', '#updateGraphicModal');
    }
    if (mode === 'delete') {
      this.deleteGraphic = graphic;
      button.setAttribute('data-target', '#deleteGraphicModal');
    }

    container?.appendChild(button);
    button.click();
  }

}

