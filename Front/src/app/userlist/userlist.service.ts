import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Userlist} from "./userlist";




@Injectable({
  providedIn: 'root'
})

export class UserlistService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getAllUsers(): Observable<Userlist[]>{
    return this.http.get<Userlist[]>(`${this.apiServerUrl}/user/all`);
  }
}
