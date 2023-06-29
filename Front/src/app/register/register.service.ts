import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Register} from "./register";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiServerUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  registerUser(register:Register):Observable<object>{
    console.log(register);
    return  this.httpClient.post(`${this.apiServerUrl}/user`,register);
  }
}
