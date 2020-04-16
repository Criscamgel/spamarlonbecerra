import { Component, OnInit } from '@angular/core';
import { Cuota } from 'src/app/models/cuota';
import { CuotasService } from 'src/app/services/cuotas.service';
import { RespuestaCalculadora } from 'src/app/models/respuesta-calculadora';
import { DataService } from 'src/app/services/data.service';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss'],
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
export class RadiogroupComponent implements OnInit {
  public radios: Cuota[];
  public data: RespuestaCalculadora[] = [];
  public cuotaSeleccionada: any;

  constructor(public cuotasService: CuotasService,
              public dataService: DataService) {

  }

  ngOnInit() {
    registerLocaleData(es);
    this.initializer();
  }

  public initializer() {
    this.dataService.disabledRadios = true;
    this.cuotasService.getCuotas()
      .subscribe(cuotasRadio => {
        this.radios = cuotasRadio;
        this.cuotasService.cuotasCargadas = true;
      });
  }

  setCuota(valorNumerico: number) {
    this.dataService.cuotaNumero = valorNumerico;
    this.dataService.setPagoSeleccionado(valorNumerico);
    this.cuotaSeleccionada = this.dataService.getDataCuotas.filter(cuot => cuot.numeroCuota === valorNumerico);
    if (this.cuotaSeleccionada.length > 0) {
      this.dataService.setClikCuota = this.cuotaSeleccionada[0];
    }
  }
}
