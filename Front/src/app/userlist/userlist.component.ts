import {Component, OnInit} from '@angular/core';
import {UserlistService} from "./userlist.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Userlist} from "./userlist";



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})


export class UserlistComponent implements OnInit{
  public userlist!: Userlist[];
constructor(private userlistservice: UserlistService) {
};

ngOnInit() {
  this.getAllUsers();
}
public getAllUsers(): void {
  this.userlistservice.getAllUsers().subscribe(
    (response: Userlist[]) => {
      this.userlist! = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}}
