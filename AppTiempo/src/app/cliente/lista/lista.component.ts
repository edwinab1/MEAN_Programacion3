import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nombre:string;
  apellidos:string;

  persona = {
    nombre: 'Pedro',
    apellidos: 'Fernandez'
  };

  abecedario= ['a','b','c','d','e','f'];


  

  constructor() { }

  ngOnInit(): void {
    
  }

}
