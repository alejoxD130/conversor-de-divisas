import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  quetzales: number = 23002553; 
  dolares: number = 0;
  tasaCambio: number = 8; 

  constructor() {
    this.convertir();
  }

  convertir() {
    if (this.quetzales) {
      this.dolares = this.quetzales / this.tasaCambio;
    } else {
      this.dolares = 0;
    }
  }
}