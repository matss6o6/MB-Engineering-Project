import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Procesors} from "./procesors";

@Injectable({
  providedIn: 'root'
})

export class ProcesorsService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getProcesors(): Observable<Procesors[]> {
    return this.http.get<Procesors[]>(`${this.apiServerUrl}/procesors/all`);
  }

  public addProcesors(procesors: Procesors): Observable<Procesors> {
    return this.http.post<Procesors>(`${this.apiServerUrl}/procesors/add`, procesors);
  }

  public updateProcesors(procesors: Procesors): Observable<Procesors> {
    return this.http.put<Procesors>(`${this.apiServerUrl}/procesors/update`, procesors);
  }

  public deleteProcesors(procesorsByIdProcesora: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/procesors/delete/${procesorsByIdProcesora}`);
  }
}
