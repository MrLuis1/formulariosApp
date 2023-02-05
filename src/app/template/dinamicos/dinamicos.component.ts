import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from '../interface/dinamic-data.interface';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  newGame!: string;
  registros: Persona = {
    nombre: 'Stefany',
    juegos: [
      { id: 1, nombre: 'The Last Of Us' },
      { id: 2, nombre: 'Dead Space' }
    ]

  }

  guardar() {
    
  }

  agregar() {
    this.registros.juegos.push({
      id: this.registros.juegos.length + 1,
      nombre: this.newGame
    })

    this.newGame = '';
  }

  borrar(id: number) {
    this.registros.juegos.splice(id, 1);
  }
}
