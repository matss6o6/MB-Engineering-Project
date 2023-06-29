import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "./user";
import {LoginuserService} from "./loginuser.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserRole} from "./UserRole";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  myForm!:FormGroup;


  constructor(private loginuserservice:LoginuserService,
              private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {


    this.myForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });

  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      this.loginuserservice.userLogin=this.user.login;
      this.loginuserservice.userRole=data.userRole;
      var log=this.user.login;
      var has=this.user.haslo;
      if(data.userRole=== UserRole.ADMIN){
        this.router.navigate(["home-log-admin"])
      }else{
        this.router.navigate(["home-log-user"])
      }
    },error => alert("Błędny login lub hasło."));
  }

}
