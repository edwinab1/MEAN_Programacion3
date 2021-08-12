import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [
    ListaComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
