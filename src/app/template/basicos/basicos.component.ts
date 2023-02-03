import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('form') form!: any;

  constructor() { }

  ngOnInit(): void {
  }

  precioValido(): boolean {
    return this.form?.controls.precio?.touched && this.form?.form.controls.precio?.value < 0 
  }

  productoValido() {
    return !this.form?.valid && this.form?.touched
  }

  guardar(data: NgForm) {
    console.log(this.form)
  }

}
