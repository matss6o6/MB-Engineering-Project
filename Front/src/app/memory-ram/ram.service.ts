import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ram} from "./ram";

@Injectable({
  providedIn: 'root'
})

export class RamService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getRam(): Observable<Ram[]> {
    return this.http.get<Ram[]>(`${this.apiServerUrl}/ram/all`);
  }

  public addRam(ram: Ram): Observable<Ram> {
    return this.http.post<Ram>(`${this.apiServerUrl}/ram/add`, ram);
  }

  public updateRam(ram: Ram): Observable<Ram> {
    return this.http.put<Ram>(`${this.apiServerUrl}/ram/update`, ram);
  }

  public deleteRam(ramByIdPam: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ram/delete/${ramByIdPam}`);
  }
}
