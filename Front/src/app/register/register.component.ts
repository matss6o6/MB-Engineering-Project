import { Component, OnInit } from '@angular/core';
import {Register} from "./register";
import {RegisterService} from "./register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register:Register=new Register();

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  userRegister(){
    this.registerService.registerUser(this.register).subscribe(data=>{
      alert("Konto zostało założone pomyślnie. Proszę się zalogować.");
      window.location.href=("login");
    },error => console.log("Błąd."))
  }

}
