import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiempoRoutingModule } from './tiempo-routing.module';
import { CiudadesComponent } from './ciudades/ciudades.component';


@NgModule({
  declarations: [
    CiudadesComponent
  ],
  imports: [
    CommonModule,
    TiempoRoutingModule
  ]
})
export class TiempoModule { }
