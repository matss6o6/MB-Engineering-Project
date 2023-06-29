import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  // @ts-ignore
  descInput: string
// @ts-ignore
  descInput1: string
  // @ts-ignore
  descInput2: string
  // @ts-ignore
  descInput3: string


  constructor(private http:HttpClient,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  getUserInput(){
    let request={
      nameusername:this.descInput,
      userMailAddress:this.descInput1,
      messageTitle:this.descInput2,
      description: this.descInput3
    }
    this.http.post("http://localhost:8080/api/contact",request).toPromise().catch(reason=>{

      if(reason.error.text == "Mail has been send!"){
        this.snackBar.open("Email został wysłany!","",{
          panelClass:['success']
        })
      }
      else{
        this.snackBar.open("Email nie został wyslany","",{
          panelClass:['failure']
        })
      }
    })
    console.log(this.descInput);
    console.log(this.descInput1);
    console.log(this.descInput2);
    console.log(this.descInput3);
  }
}
