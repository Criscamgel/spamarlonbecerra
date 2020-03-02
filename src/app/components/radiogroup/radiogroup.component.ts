import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Cuota } from 'src/app/models/cuota';
import { CuotasService } from 'src/app/services/cuotas.service';
import { RespuestaCalculadora } from 'src/app/models/respuesta-calculadora';
import { DataService } from 'src/app/services/data.service';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
  selector: 'app-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss'],
})
export class RadiogroupComponent implements OnInit, AfterContentChecked {
  public radios: Cuota[];
  public data: RespuestaCalculadora[] = [];
  constructor(public serviceCuota: CuotasService,
              public dataService: DataService) {

  }

  ngOnInit() {
    registerLocaleData( es );
    this.initializer();
  }

  public initializer() {
    this.serviceCuota.getCuotas()
    .then(cuotasRadio => {
      this.radios = cuotasRadio;
    })
    .catch(console.error);
  }

  ngAfterContentChecked(): void {
      this.dataService.getDataCuotas().subscribe((result: any) => {
        this.data = result;
      });
  }

  setCuota(value: RespuestaCalculadora) {
    if (value !== undefined) {
      this.dataService.clickCuota = value;
      console.log(value);
    }
    return;
  }

}
