import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {

  constructor(private httpClient: HttpClient) { }

  getCiudades(): Observable<any> {
    
    return this.httpClient.get<any>('http://localhost:3000/api/tiempo');
  }
}
