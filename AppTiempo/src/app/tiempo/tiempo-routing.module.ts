import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { InsertarCiudadComponent } from './ciudades/insertar-ciudad/insertar-ciudad.component';

const routes: Routes = [
  {path: 'ciudades', component:CiudadesComponent},
  {path: 'agregar', component:InsertarCiudadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiempoRoutingModule { }
