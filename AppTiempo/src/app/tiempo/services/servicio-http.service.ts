import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICiudades } from '../models/ciudades.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {

  constructor(private httpClient: HttpClient) { }

  getCiudades(): Observable<any> {
    
    return this.httpClient.get<any>('http://localhost:3000/api/tiempo');
  }

  insertarCiudades(ciudad: ICiudades): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/api/tiempo/insertar', ciudad);
  }

  eliminarCiudad(id:string): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/api/tiempo/eliminar/`+id);
  }
}
