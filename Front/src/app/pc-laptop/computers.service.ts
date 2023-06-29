
import {HttpClient} from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Computers} from './computers';

@Injectable({
  providedIn: 'root'
})

export class ComputersService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getComputers(): Observable<Computers[]>{
    return this.http.get<Computers[]>(`${this.apiServerUrl}/computers/all`);
  }
  public addComputers(computers: Computers): Observable<Computers>{
    return this.http.post<Computers>(`${this.apiServerUrl}/computers/add`, computers);
  }
  public updateComputers(computers: Computers): Observable<Computers> {
    return this.http.put<Computers>(`${this.apiServerUrl}/computers/update`, computers);
  }
  public deleteComputers(computersIdKomputera: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/computers/delete/${computersIdKomputera}`);
  }
}
