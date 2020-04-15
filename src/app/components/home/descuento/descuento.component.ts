import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
  styleUrls: ['./descuento.component.scss']
})
export class DescuentoComponent implements OnInit {
  public descuento = new FormControl({ value: 0, disabled: true });
  public descuentoMaximo: number;
  public descuentoMinimo: number;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.initializer();
  }
  initializer() {
    this.descuentoChange();
    this.getObservablePagoChange();
  }

  descuentoChange() {
    this.descuento.valueChanges.subscribe(value => {
      if (this.descuento.value < this.descuentoMinimo || this.descuento.value > this.descuentoMaximo) {
        this.dataService.descuentoErroneo = true;
    } else {
        this.dataService.descuentoErroneo = false;
        this.dataService.setDescuento(value);
      }
    });
  }

  getObservablePagoChange() {
    this.dataService.observablePagoSeleccionado.
      subscribe((value: number) => {
        if (value !== undefined) {
          this.descuento.enable();
          switch (value) {
            case 6:
              this.descuentoMinimo = 0;
              this.descuentoMaximo = 8.9;
              break;
            case 12:
              this.descuentoMinimo = 0;
              this.descuentoMaximo = 4;
              break;

            default:
              break;
          }
        }
      });
  }

}
