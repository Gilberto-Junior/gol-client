import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirplaneService {
  private urlApi = 'http://localhost:5000/api/Airplanes';

  constructor(private http: HttpClient) { }

  getAirplaneList(): Observable<any> {
    return this.http.get(`${ this.urlApi }`);
  }

  getAirplane(id: number): Observable<Object> {
    return this.http.get(`${ this.urlApi }/${ id }`);
  }

  createAirplane(airplane: Object): Observable<Object> {
    return this.http.post(`${ this.urlApi }`, airplane);
  }

  updateAirplane(value: any): Observable<Object> {
    return this.http.put(`${ this.urlApi }`, value);
  }

  deleteAirplane(id: number): Observable<any> {
    return this.http.delete(`${ this.urlApi }/${ id }`); //{ responseType: 'text' }
  }
}
