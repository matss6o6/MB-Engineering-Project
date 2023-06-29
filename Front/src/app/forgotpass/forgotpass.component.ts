import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit{
  // @ts-ignore
  descInput: string
// @ts-ignore
  descInput1: string
  // @ts-ignore
  descInput2: string

  constructor(private http:HttpClient,
              private snackBar:MatSnackBar) {}
  ngOnInit(): void {
  }
  getUserInput(){
    let request={
      login:this.descInput,
      mothername:this.descInput1,
      email:this.descInput2
    }
    this.http.post("http://localhost:8080/api/forgetpass", request).toPromise().catch(reason => {

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
  }
}
