import { Component, OnInit } from '@angular/core';
import { Persona } from './Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  contactos: Array<Persona> = []

  contact: Persona = {
        nombre: "",
        apellidos: "",
        edad: 0,
        dni: "",
        cumpleaños: new Date,
        colorFavorito: "",
        sexo: ""
  }



  constructor() { }

  ngOnInit() {
  }

}
