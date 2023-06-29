import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Orders} from "../orders";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: [`./order-detail.component.scss`]
})
export class OrderDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<OrderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Orders,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
