import { Component, OnInit } from '@angular/core';
import { RadioGroup } from 'src/app/models/radio-group';
import { Cuota } from 'src/app/models/cuota';
import { CuotasService } from 'src/app/services/cuotas.service';

@Component({
  selector: 'app-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.scss']
})
export class RadiogroupComponent implements OnInit {
  public radios: Cuota[];
  constructor(private serviceCuota: CuotasService) { }

  ngOnInit() {
    this.initializer();
  }

  public initializer() {
    this.serviceCuota.getCuotas()
    .then(cuotasRadio => {
      this.radios = cuotasRadio;
    })
    .catch(console.error);
  }
}
