import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('form') form!: any;
  defaultValues = {
    precio: 0,
    existencias: 0
  };


  constructor() { }

  ngOnInit(): void {
  }

  precioValido(): boolean {
    return this.form?.form?.controls.precio?.touched && this.form?.form?.controls.precio?.value < 0 
  }

  productoValido() {
    return !this.form?.form?.valid && this.form?.form?.touched
  }

  guardar() {
    
    this.form.resetForm({
      precio: 0,
      existencias: 0
    })
  }

}
