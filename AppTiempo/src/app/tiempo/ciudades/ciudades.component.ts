import { Component, OnInit } from '@angular/core';
import { ICiudades } from '../models/ciudades.interface';
import { ServicioHttpService } from '../services/servicio-http.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  constructor(private apiService: ServicioHttpService) { }

  ciudades: ICiudades[];

  ngOnInit(): void {

    this.getCiudades();
    
  }

  getCiudades():void {

    this.apiService.getCiudades()
      .subscribe(datos => {

        this.ciudades = datos;

        this.ciudades.map((ciudad) => {

          console.log(ciudad.nombre)
        })
      });
  }

  eliminar(id) {
    console.log(id)
    this.apiService.eliminarCiudad(id)
      .subscribe(data => {

        console.log(data)
        this.getCiudades();
      });

  }

}
