import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User, UserLoginCredentials} from "./user";
import {Observable} from "rxjs";
import {UserRole} from "./UserRole";

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private apiServerUrl = environment.apiUrl;
  private _userlogin: string = "";
  private _userRole: UserRole = UserRole.USER;
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<UserLoginCredentials>{
    console.log(user);
    this._userlogin=user.login;
    return this.httpClient.post<UserLoginCredentials>(`${this.apiServerUrl}/user/login`,user);
  }

get userLogin():string{
    return this._userlogin
}
set userLogin(userlogin:string){
    this._userlogin = userlogin;
}
get userRole():UserRole{
    return this._userRole
}
set userRole(userRole:UserRole){
    this._userRole = userRole;
}

}
