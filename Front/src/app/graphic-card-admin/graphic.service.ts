import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Graphic} from "./graphic";

@Injectable({
  providedIn: 'root'
})

export class GraphicService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getGraphic(): Observable<Graphic[]>{
    return this.http.get<Graphic[]>(`${this.apiServerUrl}/graphic/all`);
  }
  public addGraphic(graphic: Graphic): Observable<Graphic>{
    return this.http.post<Graphic>(`${this.apiServerUrl}/graphic/add`, graphic);
  }
  public updateGraphic(graphic: Graphic): Observable<Graphic> {
    return this.http.put<Graphic>(`${this.apiServerUrl}/graphic/update`, graphic);
  }
  public deleteGraphic(graphicIdGraf: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/graphic/delete/${graphicIdGraf}`);
  }
}
