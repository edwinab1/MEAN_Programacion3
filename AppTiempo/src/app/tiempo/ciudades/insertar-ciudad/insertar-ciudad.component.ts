import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICiudades } from '../../models/ciudades.interface';
import { ServicioHttpService } from '../../services/servicio-http.service';

@Component({
  selector: 'app-insertar-ciudad',
  templateUrl: './insertar-ciudad.component.html',
  styleUrls: ['./insertar-ciudad.component.css']
})
export class InsertarCiudadComponent implements OnInit {


  constructor(private apiService: ServicioHttpService) { }

  formCiudad = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(4)]),
    temperatura: new FormControl('', [Validators.minLength(8), Validators.maxLength(8)]),
    humedad: new FormControl(''),
    presion: new FormControl(''),
    velocidad: new FormControl(''),
  });

  ngOnInit(): void {
  }

  get controls(){
    return this.formCiudad.controls;
  }


  
  guardar(): void {

    if(this.formCiudad.valid)
    {

      let ciudad: ICiudades = {
        nombre: this.formCiudad.controls['nombre'].value,
        temperatura: this.formCiudad.controls['temperatura'].value,
        humedad:this.formCiudad.controls['humedad'].value ,
        velocidad: this.formCiudad.controls['velocidad'].value,
        presion: this.formCiudad.controls['presion'].value,
        fecha: new Date(),
        pais: '6115a4dbff8b631bd405d44d',
  
      }
  
      this.apiService.insertarCiudades(ciudad)
        .subscribe(data => {
  
          console.log(data);
  
        })

    }else{
      console.log("Formulario No Valido")
    }

    



  }

}
