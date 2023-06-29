import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Disc} from "./disc";

@Injectable({
  providedIn: 'root'
})

export class DiscService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getDisc(): Observable<Disc[]>{
    return this.http.get<Disc[]>(`${this.apiServerUrl}/disc/all`);
  }
  public addDisc(disc: Disc): Observable<Disc>{
    return this.http.post<Disc>(`${this.apiServerUrl}/disc/add`, disc);
  }
  public updateDisc(disc: Disc): Observable<Disc> {
    return this.http.put<Disc>(`${this.apiServerUrl}/disc/update`, disc);
  }
  public deleteDisc(discIdTwarde: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/disc/delete/${discIdTwarde}`);
  }
}
