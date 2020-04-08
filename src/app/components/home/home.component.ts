import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { RequestCalculoCuota } from 'src/app/models/request-calculo-cuota';
import { CuotasService } from 'src/app/services/cuotas.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animationFadeOut', [
      transition(':enter', [
        style({ opacity: '1' }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: '0' }))
      ]),
      state('*', style({ opacity: '1' })),
    ])
  ]
})
export class HomeComponent implements OnInit {

  public env = environment;
  public convenio = new FormControl(false);
  private request: RequestCalculoCuota = new RequestCalculoCuota();

  constructor(public dataService: DataService,
              public cuotaService: CuotasService) {}

  ngOnInit() {
    this.initializer();
  }

  initializer() {
    this.getOservableDescuento();
    this.getOservableMonto();
  }

  convenioSet() {
    this.dataService.convenio = this.convenio.value;
  }

  goSolicitud() {
    window.location.href = this.env.experian;
  }

  onPrint() {
      window.print();
  }

  getOservableMonto() {
    this.dataService.observableMonto
    .subscribe((value: number) => {
    if (value !== 0) {
    this.dataService.disabledRadios = false;
    this.request.valorSolicitado = value;
    this.dataService.cuotaCalculada = false;
    this.calcularCuota();
    } else {
      this.dataService.disabledRadios = true;
    }
    });
  }

  getOservableDescuento() {
    this.dataService.observableDescuento
    .subscribe((value: number) => {
      if (value !== 0 && value !== null && !this.dataService.descuentoErroneo) {
    this.request.descuento = value / 100;
    this.dataService.cuotaCalculada = false;
    this.calcularCuota();
    } else {
      this.dataService.cuotaCalculada = true;
    }
    });
  }

  calcularCuota() {
    this.dataService.calculoCuotas(this.request).subscribe((data) => {
      this.dataService.setDataCuotas = data;
      this.dataService.cuotaCalculada = true;
      /**/console.log(data);
      if (this.dataService.cuotaNumero !== undefined && this.dataService.cuotaNumero !== 0) {
        data.forEach(item => {
          if (item.numeroCuota === this.dataService.cuotaNumero) {
            this.dataService.clickCuota = item;
          }
        });
      }
    });
  }



}
