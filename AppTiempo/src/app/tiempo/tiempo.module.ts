import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiempoRoutingModule } from './tiempo-routing.module';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { InsertarCiudadComponent } from './ciudades/insertar-ciudad/insertar-ciudad.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CiudadesComponent,
    InsertarCiudadComponent
  ],
  imports: [
    CommonModule,
    TiempoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TiempoModule { }
