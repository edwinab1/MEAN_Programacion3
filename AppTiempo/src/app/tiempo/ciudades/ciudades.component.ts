import { Component, OnInit } from '@angular/core';
import { ServicioHttpService } from '../services/servicio-http.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  constructor(private apiService: ServicioHttpService) { }

  ngOnInit(): void {

    this.apiService.getCiudades()
    .subscribe(datos => {
      console.log(datos);
    });
  }

}
