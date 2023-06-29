import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accessories} from "./accessories";

@Injectable({
  providedIn: 'root'
})

export class AccessoriesService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getAccessories(): Observable<Accessories[]>{
    return this.http.get<Accessories[]>(`${this.apiServerUrl}/accessories/all`);
  }
  public addAccessories(accessories: Accessories): Observable<Accessories>{
    return this.http.post<Accessories>(`${this.apiServerUrl}/accessories/add`, accessories);
  }
  public updateAccessories(accessories: Accessories): Observable<Accessories> {
    return this.http.put<Accessories>(`${this.apiServerUrl}/accessories/update`, accessories);
  }
  public deleteAccessories(accessoriesIdAkcesoria: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/accessories/delete/${accessoriesIdAkcesoria}`);
  }
}
