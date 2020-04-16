import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  constructor(public dataService: DataService) { }
  }
