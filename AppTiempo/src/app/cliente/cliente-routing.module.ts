import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: 'lista', component: ListaComponent
  },
  {
    path: 'agregar', component: AgregarComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
